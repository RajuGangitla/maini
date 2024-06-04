import Core from "@/components/core";
import Hero from "@/components/hero";
import Intro from "@/components/intro";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Core />
    </>
  );
}
