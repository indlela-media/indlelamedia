import React from 'react'

export default function ContactUs() {
    return (
        <section className="contact pb-5" id="contactUs">
            <div className="container">
                <div className="container text-center py-5">
                    <h2 className="py-3">Contact us</h2>
                    <div className="mx-auto heading-line"></div>
                </div>

                <div className="row">
                    <div className="col-lg-6 container mb-5">
                        <h3>Subscribe to our newsletter.</h3>

                        <form action="" className="d-flex align-items-center mr-5">
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input className="form-control" id="email" type="email" aria-describedby="emailhint" placeholder="Enter email" />
            
                                <small  id="emailhint" className="form-text">We'll never share your email.</small>
                            </div>

                            <button type="submit" className="btn btn-secondary mb-1 ml-3">Subsribe</button>
                        </form>


                        <div className="d-flex flex-column mt-5 bigContact">
                            <a href="mailto:info@indlelamedia.com">
                                <i className="fa fa-envelope-o mr-1"></i> info@indlelamedia.com
                            </a>

                            <div className="d-flex align-items-center mt-3">
                                <i className="fa fa-map-pin"></i> <div className="ml-2">Robert Sobukwe road<br/>Bellville, Cape Town<br/>7535
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <form className="col-lg-6">
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input className="form-control" id="email" type="email" aria-describedby="emailhint" placeholder="Enter email"/>
        
                            <small  id="emailhint" className="form-text">We'll never share your email.</small>
                        </div>
        
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input className="form-control" id="name" type="text" aria-describedby="emailhint" placeholder="Enter email"/>
                        </div>
        
                        <div className="form-group">
                            <label for="message">Message</label>
                            <textarea className="form-control" id="message" placeholder="Write something" rows="5"></textarea>
                        </div>

                        <button type="submit" className="btn btn-lg btn-secondary">Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
