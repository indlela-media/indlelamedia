import React from 'react'

export default function Footer() {
    return (
        <footer class="footer borderTop">
            <div class="text-center py-5">
                <a href="#" class="">
                    <img class="mb-3" src="/img/logo.png" width="100px"/>
                </a>

                <div class="mx-auto heading-line"></div>
            </div>

            <div class="row mb-3">
                <div class="col-lg-8 offset-lg-2 text-center">
                    <ul class="nav justify-content-center">

                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/pricing">Pricing</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/services">Services</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="copywright text-center py-3 text-muted">
                <p>Indlela Media. All rights reserved &copy; 2020</p>
            </div>
        </footer>
    )
}
