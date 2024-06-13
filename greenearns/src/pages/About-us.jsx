import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import Subfooter from "../components/Subfooter";

const Aboutus = () => {
    return (
        <main className="bg-white h-screen">
            <Navbar />
            <section className="w-[100vw]  bg-white">
                <div className="mt-28">
                <About />
                </div>
                <Subfooter />
                <Footer />
            </section>
        </main>
    );
};

export default Aboutus;
