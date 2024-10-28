import Hero from "@/components/section/Hero"
import Backend from "@/components/section/Backend"
import Fontend from "@/components/section/Fontend"
import AboutMe from "@/components/section/Aboutme"
import Plugins from "@/components/section/Plugins"

export default function Home() {
  return (
      <div>
      <Hero />
      <Backend />
      <Fontend />
      <AboutMe />
      <Plugins />
      </div>
   

  );
};