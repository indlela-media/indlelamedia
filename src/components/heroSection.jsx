import React from 'react'

export default function HeroSection() {
    return (
        <section className="home d-flex pt-5 pb-5">
            <div className="container-fluid">
                <div className="row mt-5">
        
                    <div className="col-lg-5 my-5">
                        <div className="row">
                            <div className="home-content col-lg-10 offset-lg-2 overlflow-hidden container-fluid">
                                <h1 className="pb-3 animate__animated animate__fadeInLeft whiteText">THE FASTEST WAY TO CONNECT TO SPONSORS</h1>
                                <p className="lead pb-3 animate__animated animate__fadeInLeft whiteText">We offer Non-Profit organisations access to sponsors that are committed to helping them reach their annual goals. We provide easy, fast and reliable access to corporate sponsors who are committed to giving back to their surrounding communities.</p>
        
                                <a href="/about">
                                    <buttton className="btn btn-lg btn-outline-secondary animate__animated  animate__bounceIn">Learn more</buttton>
                                </a>

                                <a href="/signUp">
                                    <buttton className="btn btn-lg btn-primary animate__animated  animate__bounceIn">Get started</buttton>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 d-flex align-items-center justify-content-center">
                        <img src="/img/homePageMan.svg" width="550" className="animate__animated animate__bounceIn img-fluid" alt="Man With Software" />       
                    </div>
                </div>
            </div>
        </section>
    )
}
