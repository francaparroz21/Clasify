import "./Footer.css"

export const Footer = () => {
    return (

        <div className="container-fluid container-footer">

            <footer className="text-center text-white" >

                <div className="container">

                    <section >

                        <div className="row text-center d-flex justify-content-center pt-5">

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">Nosotros</a>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">Products</a>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">Profesores</a>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">Ayuda</a>
                                </h6>
                            </div>


                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">Contacto</a>
                                </h6>
                            </div>

                        </div>

                    </section>


                    <hr className="my-5" />


                    <section className="mb-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                    distinctio earum repellat quaerat voluptatibus placeat nam,
                                    commodi optio pariatur est quia magnam eum harum corrupti
                                    dicta, aliquam sequi voluptate quas.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="text-center mb-5">
                        <a href="" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-github"></i>
                        </a>
                    </section>
                </div>

                <div
                    className="text-center p-3"
                >
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/"
                    >MDBootstrap.com</a
                    >
                </div>
            </footer>
        </div>
    );
}