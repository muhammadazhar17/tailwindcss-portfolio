
import Wrapper from "@/components/shared/Wrapper"
import Link from "next/link";

export default function Plugins() {
  return (
    <Wrapper>
      <h2 className="flex justify-center text-black  text-4xl mb-20 animate-pulse font-bold">Social Plugins</h2>

    <div className="flex justify-between text-2xl text-black">
    

      <Link href="https://www.linkedin.com/in/muhammad-azhar-8b01782b5/" target="_blank">
      <button className="bg-gray-900 text-white py-2 mt-4 px-4 hover:text-blue-400" >Connect with
      Linkedin    </button>
      </Link>

      <Link href="https://github.com/muhammadazhar17" target="_blank">
      <button className="bg-gray-900 text-white py-2 mt-4 px-4 hover:text-blue-400"  >Connect with
      Github    </button>
      </Link>
  </div>
    <div
      className= "my-16 border-t border-gray-700  py-0">
      </div>
        </Wrapper>
);
};