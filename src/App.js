import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Porfolio from "./components/Porfolio";
import { SocialLinks } from "./components/SocialLinks";


function App() {
  return (
    <div>
      <NavBar/>
      <Home />
      <About/>
      <Porfolio className="mt-4"/>
      <Experience/>
      <Contact/>
      <SocialLinks />
    </div>
  );
}

export default App;
