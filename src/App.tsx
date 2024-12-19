import About from "./components/About/About";
import Collection from "./components/Collection/Collection";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import WhatsAppIcon from "./components/WhatsappIcon";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Hero />
        <About />
        <Collection />
        <Products />
        <Contact />
        <WhatsAppIcon />
      </div>
    </>
  );
}

export default App;
