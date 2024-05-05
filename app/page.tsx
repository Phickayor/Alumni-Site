import About from "./components/Home/About";
import Articles from "./components/Home/Articles";
import Blog from "./components/Home/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Home/Hero";
import Motto from "./components/Home/Motto";
import Structure from "./components/Home/Structure";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Articles />
      <About />
      <Motto />
      <Structure />
      <Blog />
      <Footer />
    </>
  );
}
