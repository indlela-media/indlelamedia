import React from 'react'

export default function CallToAction() {
    return (
        <section class="call-to-action homeMobile py-5">
    {/*         <!--DESKTOP VERSION--> */}
            <div class="container text-center w-50 d-none d-md-none d-lg-block d-lg-block">
                <h2 class="py-3">Connect for impact</h2>

                <div class="mx-auto heading-line"></div>

                <p class="py-3 text-justify lead">Whether your goal is to make a social impact or connect with Corporate funders our CSI management software creates an environment where Non-profit organisations find fast, easy and reliable access to funding and connect Corporate funders to relevant organisations at the same time.</p>

                <a href="/about">
                    <button class="btn btn-lg btn-primary">Learn more</button>
                </a>
            </div>

    {/*         <!--MOBILE VERSION--> */}
            <div class="container text-center d-sm-block d-md-block d-lg-none d-lg-none">
                <h2 class="py-3">Connect for impact</h2>

                <div class="mx-auto heading-line"></div>

                <p class="py-3 text-justify lead">Whether your goal is to make a social impact or connect with Corporate funders our CSI management software creates an environment where Non-profit organisations find fast, easy and reliable access to funding and connect Corporate funders to relevant organisations at the same time.</p>

                <a href="/about">
                    <button class="btn btn-lg btn-primary">Learn more</button>
                </a>
            </div>
        </section>
    )
}
