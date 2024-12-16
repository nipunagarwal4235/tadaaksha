import About from "./components/About/About";
import Collection from "./components/Collection/Collection";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

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
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"></main>
      </div>
    </>
  );
}

export default App;
