import About from "./components/About";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="font-mulish">
      <Header />
      <Hero />
      <Articles/>
      <About/>
    </main>
  );
}
