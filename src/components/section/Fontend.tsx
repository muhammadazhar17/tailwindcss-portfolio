
import Wrapper from "@/components/shared/Wrapper"
import Link from "next/link";

export default function Fontend() {
  return (
    
    <Wrapper>
          <section className="flex-1 my-5 px-4 sm:px-6 md:px-10">

            <div className="text-black   ">
  <div className="container mx-auto">
  
    <h2 className="text-3xl font-bold text-center mb-8 animate-pulse">Fontend skills</h2>
    <p className="text-center mb-12 text-lg">
      
    Being a professional in Next.js UI design, Tailwind CSS; learning continious
    </p>





    {/* Grid Layout for the 6 Boxes */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Box 1 */}
      <div className="bg-gradient-to-b from-yellow-500 to-indigo-900 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-xl font-semibold mb-4">Mania pizza</h3>
      <Link href="https://mania-pizza-family.vercel.app/" target="_blank">
        <button className="bg-gray-900 text-white py-2 mt-4 px-4" >Go to Mania  Pizza</button>
      </Link>
    
      </div>

      {/* Box 2 */}
      <div className="bg-gradient-to-b from-teal-600 to-blue-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-xl font-semibold mb-4">simple portfolio</h3>


        <Link href="https://azhar-portfiolo.vercel.app" target="_blank">
        <button className="bg-gray-900 text-white py-2 mt-4 px-4" >Go to raw portfolio</button>
      </Link>
    
   
            {/* </Link> */}
      </div>

      {/* Box 3 */}
      <div className="bg-gradient-to-b from-pink-600 to-purple-900 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-xl font-semibold mb-4">dod </h3>
     <p>

       <button className="bg-gray-900 text-white py-2 mt-4 px-4" >Under construction
        </button></p>
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
