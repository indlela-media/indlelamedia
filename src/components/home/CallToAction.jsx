import React from 'react';

//
import { CallToActionBtn } from '../buttons/Buttons';

export default function CallToAction() {
    return (
        <section className="py-5 callToActionBg">
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center callToAction container">
                    <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9 d-flex d-flex align-items-center justify-content-center w-50">
                        <p>We provide crucial data that inform companies on the best candidates to approach for CSI/SED initiatives.</p>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 d-flex align-items-center justify-content-center">
                        <CallToActionBtn text="Learn More" href="/"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
