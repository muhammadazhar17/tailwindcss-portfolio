import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper"
import Link  from "next/link"

export default function Hero() {
  return (
   


<div className="flex">
      <Wrapper>
        <main className="flex flex-col md:flex-row mt-10 mx-10">
      {/* Hero Section */}
      <section className="gap-6 items-center md:flex md:space-x-6">
            <div className="flex-1">
           
   
              <h1 className="font-bold text-5xl text-black animate-pulse ">
              <div style={{ padding: '14px' }}>
              <h1 className="text-black">Muhammad Azhar</h1>
     
   </div>
              </h1>

              <p className="text-lg text-gray-600 mt-2">
                I'm a full-stack developer with a passion for building beautiful
                websites and applications.
              </p>
              <Link href="/Contact">
                <button className="bg-gray-700 text-white py-2 mt-4 px-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-700">
                  Contact Me
                </button>
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex-1">
              <Image
                width={500}
                height={500}
                src="/hero.jpeg"
                alt="hero image"
              />
            </div>
          </section>
        </main>
        <div className="my-16 border-t border-gray-700"></div>
    </Wrapper>
  </div>
  );
};