import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Principle from "./components/Principle";
import Creation from "./components/Creation";
import Experience from "./components/Experience";
import BehindTheScenes from "./components/BehindTheScenes";
import Night from "./components/Night";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Principle />
        <Creation />
        <Experience />
        <BehindTheScenes />
        <Night />
      </main>
      <Footer />
    </>
  );
}
