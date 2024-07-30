import { Link } from 'react-router-dom';
import './SignUp.css'

export const SignUp = () => {


    return (
        <>
            <section className=" container container-signup" >
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" >
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center container-form-img">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5   ">Registrarse</p>

                                            <form className="form-sigunp">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" />
                                                        <label className="form-label" for="form3Example1c">Nombre de usuario</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control" />
                                                        <label className="form-label" for="form3Example3c">Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control" />
                                                        <label className="form-label" for="form3Example4c">Contraseña</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4cd" className="form-control" />
                                                        <label className="form-label" for="form3Example4cd">Repetir contraseña</label>
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                    <label className="form-check-label" for="form2Example3">
                                                        Acepto todas las declaraciones en <Link to={"/conditions"}>Términos de servicio</Link>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Registrar</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 container-signup-img">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}