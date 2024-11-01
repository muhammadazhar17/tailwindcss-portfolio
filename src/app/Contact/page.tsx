import Plugins from "@/components/section/Plugins";
import Wrapper from "@/components/shared/Wrapper"
import Link from "next/link";

export default function Contact(){
    return(<Wrapper>
        <div className="mb-30 py-16 px-20">
        <div>
        <h2 className="flex justify-center text-black  text-4xl mb-6 font-bold animate-pulse">Contact Me</h2>
        </div>
            
        <div className="mb-6">
        <h2 className="flex justify-left text-black  text-4xl mb-6 font-semibold">Via Email</h2>
        <ul className=" text-lg text-black">
            <li className="mb-2">azhar.jang@gmail.com</li>
            <li className="mb-2">azhar_jang@yahoo.com</li>
        </ul>
        </div>


        <div>
        <h2 className="flex justify-left text-black  text-4xl mb-6 font-bold">Via Linkedin</h2>
        <Link href="https://www.linkedin.com/in/muhammad-ashar-827262320/" target="_blank">
        <button className="bg-gray-600 text-white py-2 mt-4 px-4 hover:bg-blue-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" >Message On Linkedin</button>
      </Link>
        </div>
     </div>
          <div className= "my-16 border-t border-gray-700  py-0">
      </div>
      <Plugins />
    </Wrapper>
//         <main className=" flex mt-50  mb-96">
//         <Wrapper>

        
//                 <div><h1 className="flex text-3xl font-bold mb-12">contact me by email</h1>
                
//         <button className="bg-gray-900 text-white py-2 mt-4 px-4" >azhar.jang@gmail.com</button>
     
                  
//                 </div>

//                 <div className="flex text-3xl font-bold mb-12" >
//                 <h1 className="mb-8">contact via linkedin</h1>
//                 <div>

                
//                 <Link href="https://linkedin.com/in/muhammad-azhar-8b01782b5" target="_blank">
//         <button className="bg-gray-900 text-white py-2 mt-4 px-4" >message linkedin</button>
//       </Link>
//                 </div>
//               </div>

//                 </Wrapper>
//                </main>

    );
};
