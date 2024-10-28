
import Wrapper from "@/components/shared/Wrapper"
import Link from "next/link";

export default function Backend() {
  return (
    <Wrapper>
       <section className="flex-1 my-5 px-4 sm:px-6 md:px-10">

            <div className=" text-black py-8">
  <div className="container mx-auto">
  
    <h2 className="text-3xl font-bold text-center mb-8 animate-pulse">Backend skills</h2>
    <p className="text-center mb-12 text-lg">
      Being a proffessional in Typescript as, learning continious
    </p>





    {/* Grid Layout for the 6 Boxes */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Box 1 */}
      <div className="bg-gradient-to-b from-purple-400 to-indigo-900 p-6 rounded-lg shadow-lg  transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-xl font-semibold mb-4">Simple Calculatotr</h3>
      <Link href="https://github.com/muhammadazhar17/simple-calculator" target="_blank">
        <button className="bg-gray-900 text-white py-2 mt-4 px-4" >More About calculator</button>
      </Link>
    
      </div>

      {/* Box 2 */}
      <div className="bg-gradient-to-b from-teal-600 to-blue-300 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-xl font-semibold mb-4">Number Gussing Game</h3>

        <Link href="https://github.com/muhammadazhar17/number-gussing-game" target="_blank">

   <button className="bg-gray-900 text-white py-2 mt-4 px-4" >More About Game
            </button>
            </Link>
      </div>

      {/* Box 3 */}
      <div className="bg-gradient-to-b from-pink-600 to-orange-600 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-xl font-semibold mb-4">stand alone atm</h3>
        <Link href="https://github.com/muhammadazhar17/atm" target="_blank">
       <button className="bg-gray-900 text-white py-2 mt-4 px-4" >More About Atm
        </button></Link>
      </div>
     
    
    </div>
    
  </div>
  <div
      className= "my-16 border-t border-gray-700  py-0">
      </div>
</div>
      
        
      </section>
        
        </Wrapper>
);
};