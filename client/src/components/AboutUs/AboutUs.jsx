import './AboutUs.css'

export const AboutUs = () => {


    return (
        <>
            <div className='container'>

                <section className="py-3 py-md-5">
                    <div className="container">
                        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                            <div className="col-12 col-lg-6 col-xl-5 container-aboutus-images1">
                                <img className="img-fluid rounded" loading="lazy" src={process.env.PUBLIC_URL + "/images/woman-clasify.jpg"} alt="About 1" />
                                <img className="img-fluid rounded" loading="lazy" src={process.env.PUBLIC_URL + "/images/clasify-model-girl-notebook.jpg"} alt="About 1" />
                            </div>
                            <div className="col-12 col-lg-6 col-xl-7">
                                <div className="row justify-content-xl-center">
                                    <div className="col-12 col-xl-11">
                                        <h2 className="mb-3">Quienes somos?</h2>
                                        <p className="lead fs-4 text-secondary mb-3">
                                        Somos una comunidad dedicada a ofrecer apoyo educativo personalizado en todos los niveles.
                                         Utilizamos tecnología avanzada para proporcionar un aprendizaje efectivo y adaptado a tus necesidades individuales.
                                          Nuestro objetivo es facilitar tu éxito académico mediante un enfoque integral y moderno.

                                        </p>
                                        <p className="mb-5">Ayudamos a las personas a alcanzar sus metas a través de nuestros servicios de tutoría en línea.
                                             Nuestra misión es ofrecer apoyo educativo excepcional y personalizado, 
                                             brindando una experiencia de aprendizaje única y efectiva.</p>
                                        <div className="row gy-4 gy-md-0 gx-xxl-5X">
                                            <div className="col-12 col-md-6">
                                                <div className="d-flex">
                                                    <div className="me-4 text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                                                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h2 className="h4 mb-3">Funcionamiento simple</h2>
                                                        <p className="text-secondary mb-0">Conectamos estudiantes con tutores para un aprendizaje efectivo.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="d-flex">
                                                    <div className="me-4 text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                                                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h2 className="h4 mb-3">Objetivos</h2>
                                                        <p className="text-secondary mb-0">Motívate con nuestro sistema de logros y 
                                                            disfruta de precios únicos y ofertas exclusivas.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-3 py-md-5">
                    <div className="container">
                        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                            <div className="col-12 col-lg-6 container-aboutus-images2">
                                <img className="img-fluid rounded img-aboutus2" loading="lazy" src={process.env.PUBLIC_URL + "/images/clasify-model-smiling.jpg"} alt="About 2" />
                                <img className="img-fluid rounded img-aboutus2" loading="lazy" src={process.env.PUBLIC_URL + "/images/clasify-model-boy-notebook.jpg"} alt="About 2" />
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="row justify-content-xl-center">
                                    <div className="col-12 col-xl-10">
                                        <h2 className="mb-3">Por que elegirnos?</h2>
                                        <p className="lead fs-4 mb-3 mb-xl-5">
                                        Elegirnos significa optar por un apoyo educativo altamente personalizado y adaptado a tus necesidades específicas.
                                         Ofrecemos tutorías en línea que garantizan una experiencia de aprendizaje efectiva y flexible.
                                         Nuestro equipo de expertos está dedicado a tu éxito académico,
                                          brindando un enfoque integral que te ayuda a alcanzar tus metas con el máximo apoyo y profesionalismo.
                                        </p>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="me-3 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="fs-5 m-0">Beneficios y ofertas exclusivas: Obtén acceso a promociones especiales y 
                                                    recompensas diseñadas para maximizar tu experiencia educativa.</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="me-3 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="fs-5 m-0">
                                                Interfaz intuitiva: Disfruta de una plataforma fácil de usar,
                                                diseñada para ofrecer una experiencia de aprendizaje fluida y sin complicaciones.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-4 mb-xl-5">
                                            <div className="me-3 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="fs-5 m-0">Resultados excepcionales: Benefíciate de un enfoque educativo que ha demostrado obtener resultados sobresalientes en el rendimiento académico de nuestros estudiantes.

                                                </p>
                                            </div>
                                        </div>
                                        <button type="button" className="btn bsb-btn-xl btn-outline-primary rounded-pill">Conectate ahora</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}