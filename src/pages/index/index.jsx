import Hero from "./components/Hero";
import About from "./components/About";
import News from "./components/News";

function IndexPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <News />
    </main>
  );
}

export default IndexPage;
