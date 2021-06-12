
//SCSS
import './scss/main.scss';
import './scss/responsive.scss';

//CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Components
import Navigation from './components/navigationBar';
import HeroSection from './components/heroSection';
import CallToAction from './components/callToAction';
import Services from './components/services';
import Portfolio from './components/portfolio';
import ContactUs from './components/contactUs';


function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <CallToAction />
      <Services />
      <Portfolio />
      <ContactUs />
    </div>
  );
}

export default App;
