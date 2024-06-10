import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import Hero from "../components/Hero";
import How from "../components/How";
import Recycle from "../components/Recycle";
import Subfooter from "../components/Subfooter";

const Home = () => {
  return (
    <main className="bg-white h-screen">
      <Navbar />
      <section className="w-[100vw]  bg-white">
        <Hero />
        <How />
        <Recycle />
        <About />
        <Subfooter />
        <Footer />
      </section>
    </main>
  );
};

export default Home;
