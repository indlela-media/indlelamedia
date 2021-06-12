import React from 'react'

export default function Services() {
    return (
        <section className="services">
            <div className="text-center py-5">
                <h2 className="py-3">Products {'&'} Solutions</h2>

                <div className="mx-auto heading-line"></div>
            </div>

            <div className="container">
                <div className="row justify-content-center pb-5">
                    <div className="col-md-12 col-lg-5 text-center hoverCard hoverCard-1">
                        <div className="container p-3">
                            <i className="fa fa-laptop"></i>
                            <h4 className="py-3">CSI Space</h4>
                            <p className="pb-2 text-justify">The CSI-Space is software that simplifies manual admin work for Corporate Social Investment departments by a system that regulates the information of your projects. CSI-Space eliminates the amount of time you spend on the net looking for information on organisations and provides the relevant details of organisations.</p>

                            <a href="/signUp">
                                <button className="btn btn-lg btn-secondary animate__animated  animate__bounceIn">Get started</button>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-12 d-md-block d-lg-none d-xl-none pt-4">
                    </div>

                </div>
            </div>
        </section>
    )
}
