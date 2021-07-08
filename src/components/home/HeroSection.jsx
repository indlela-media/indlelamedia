import React from 'react';

import '../../scss/homepage.scss';

import { GreenBlueBtn, YellowGreenBtn } from '../buttons/Buttons';

export default function HeroSection() {
    return (
        <section className="d-flex flex-column justify-content-center align-items-center heroSection">
            <div className="text-center container">
                <h1 className="container">Find the best NPO for your next CSI initiative</h1>

                <div className="d-flex justify-content-center pt-3">
                    <GreenBlueBtn href="/about" text="Learn More" />

                    <div className="mx-4"></div>

                    <YellowGreenBtn href="/consultation" text="Consultation" />
                </div>
            </div>
        </section>
    )
}
