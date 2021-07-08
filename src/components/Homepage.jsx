//React Modules
import React from 'react';

//SCSS
import '../scss/homepage.scss';

//React Components
import HeroSection from './home/HeroSection';
import CallToAction from './home/CallToAction';


//React Functional Component
export default function Homepage() {
    return (
        <main>
            <HeroSection />
            <CallToAction />
        </main>
    )
};
