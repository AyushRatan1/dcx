import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import GoogleGeminiEffect from "./components/GoogleGeminiEffectDemo";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import MacbookScroll from "./components/MacbookScrollDemo";
import HeroParallax from "./components/HeroParallaxDemo";
import Pincontainer from "./components/AnimatedPinDemo";
import Intro from "./components/intro";
import ContainerScroll from "./components/HeroScrollDemo";
import Tabs from "./components/TabsDemo";
const App = () => {
  return (
    <>
      <div className="pt-[4.75em] lg:pt-[5.25rem] overflow-hidden">
        <Header />

        <Intro />
        <Pincontainer />
    
        <Roadmap />
       
        
       

       
        <GoogleGeminiEffect />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
