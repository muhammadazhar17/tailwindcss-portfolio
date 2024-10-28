import Plugins from "@/components/section/Plugins";
import Wrapper from "@/components/shared/Wrapper"


export default function About() {
  return (
    
    <Wrapper>
        <div className="mb-30 py-16 px-20">
            <h2 className="flex justify-center text-black  text-4xl mb-6 font-bold animate-pulse">About Me</h2>

            <p className=" text-black text-lg leading-relaxed justify-content"> Im Muhammad Azhar and I thrilled to share that I’ve been diving deep into the world of Next.js web development, and it’s been an incredibly rewarding experience!. <br />


I am continuously learning knowledge by learning new technologies, chatbot development, and js programming languages. <br /> I mainly work in HTML & CSS frameworks having extensive experience in Front-end development 
</p>
          <div
      className= "my-16 border-t border-gray-700  py-0">
      </div>
      </div>
      <Plugins />

      </Wrapper>
);
};