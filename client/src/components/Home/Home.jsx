export const Home = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={process.env.PUBLIC_URL + "/images/banner1.jpg"} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    
                    <img src={process.env.PUBLIC_URL + "/images/banner2.jpg"} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={process.env.PUBLIC_URL + "/images/banner1.jpg"} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}