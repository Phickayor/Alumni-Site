import About from "./components/About";
import Articles from "./components/Articles";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Motto from "./components/Motto";
import Structure from "./components/Structure";

export default function Home() {
  return (
    <main className="font-mulish">
      <Header />
      <Hero />
      <Articles/>
      <About/>
      <Motto/>
      <Structure/>
      <Blog/>
    </main>
  );
}
