import Link from "next/link"

import Image from "next/image";
import boom from "./boom.gif";


export default function Home() {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center screen1">
        <h1 className="text-5xl font-bold mb-[30px] p-2 bg-gray-100">
          HAPPY BIRTHDAY JEREMIAH
        </h1>
        <h1 className="text-xl mb-[30px] p-2 bg-gray-100">
          hope you like this website :3
        </h1>
        <Link
          href="/site"
          className=" mb-[30px] font-bold text-white bg-green-500 hover:bg-green-700 rounded-xl px-5 py-2 border-2 border-gray-300 duration-200 text-3xl"
        >
          Open
        </Link>
        <Image src={boom} alt="boom" />
      </div>
    );
    
}
