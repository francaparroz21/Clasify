export const signup = (req, res) =>{
    const {email,password,username} =req.body
    res.send('signup')
}

export const login = (req, res) =>{
    res.send('login')
}