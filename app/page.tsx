import About from "./components/About";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Motto from "./components/Motto";

export default function Home() {
  return (
    <main className="font-mulish">
      <Header />
      <Hero />
      <Articles/>
      <About/>
      <Motto/>
    </main>
  );
}
