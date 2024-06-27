import About from "../components/About";
import Hero from "../components/Hero";
import How from "../components/How";
import Recycle from "../components/Recycle";

const Home = () => {
  return (
    <main className="bg-white">
      <section className="w-[100vw]  bg-white">
        <Hero />
        <How />
        <Recycle />
        <About />
      </section>
    </main>
  );
};

export default Home;
