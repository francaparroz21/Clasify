import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { createAccessToken } from "../libs/jwt.js"

export const signup = async (req, res) => {
    const { email, password, username } = req.body

    try {

        const hashPass = await bcrypt.hash(password, 10)
        const newUser = new User({
            username,
            email,
            password: hashPass,
        })

        const userSaved = await newUser.save()
        const token = await createAccessToken({
            id: userSaved._id
        })

        res.cookie('token', token)

        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.username,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        })
    } catch (error) {
        res.status(500).json({
            "message": error.message
        })
    }


}
export const login = async (req, res) => {

    try {
        const { email, password } = req.body

        const userFound = await User.findOne({ email })

        if (!userFound) return res.status(400).json({
            message: "user not found"
        })

        
        const isEquals = await bcrypt.compare(password, userFound.password)
        console.log(isEquals)
        console.log(password, userFound.password)
        if (!isEquals) return res.status(400).json({
            message: "invalid credentials"
        })


        const token = await createAccessToken({
            id: userFound._id,
            username: userFound.username,
        })

        res.cookie('token', token)

        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.username,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        })
    } catch (error) {
        res.status(500).json({
            "message": error.message
        })
    }


}

export const logout = async (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)
    if(!userFound)return res.status(400).json({message: "User not found"})
    
    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    })
    console.log(req.user)
    res.send('profile')
}

