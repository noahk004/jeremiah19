"use client"

import Image from "next/image";
import Link from "next/link"
import j1 from "../j1.jpeg";

import { motion } from "framer-motion"

import Nav from "@/app/components/Nav"


export default function Page() {
  return (
    <div>
      <Nav />

      <motion.div initial={{ opacity: 0 }}  animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex justify-center mt-[100px]">
        <div>
          <h1 className="font-bold text-4xl mb-[20px]">Jeremiah</h1>
          <div className="flex gap-[40px]">
            <div className="max-w-[400px] ">
              <p className="text-lg mb-6">
                Welcome to the official Jeremiah.com website. Explore our vast
                collection of Jeremiah products, learn about the rich Jeremiah
                history, and get involved in the Jeremiah support community.
                This website was made in honor of Jeremiah Yong, celebrating his
                19th birthday.
              </p>
              <Link href="/site/catalogue" className="bg-orange-500 hover:bg-orange-700 text-white font-bold text-xl rounded-xl px-5 py-3 duration-200">
                Explore catalogue
              </Link>
            </div>

            <div>
              <Image src={j1} alt="Jeremiah" className="w-[400px]" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
