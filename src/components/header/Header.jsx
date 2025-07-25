
import Navbar from "../navbar/Navbar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className="min-h-screen w-full mb-4 bg-cover bg-center flex items-center
        overflow-hidden"
      style={{ backgroundImage: "url('./header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{duration:1.5}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className="container text-center mx-auto text-white px-6 py-4 md:px-20 lg:px-32"
      >
        <h1 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Explore homes that fit your dreams
        </h1>
        <div className="space-x-6 mt-16">
          <a href="#Projects" className="border border-white px-8 py-3 rounded">
            Projects
          </a>
          <a
            href="#Contact"
            className="border border-white px-8 py-3 rounded bg-blue-500"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
