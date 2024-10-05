import Link from "next/link"

export default function Nav() {
  return (
    <div className="w-screen flex text-xl justify-between items-center">
      <h2 className="font-bold text-2xl text-orange-500 p-4">Jeremiah.com</h2>
      <div className="flex ">
        <Link href="/site" className="p-4 hover:bg-gray-200 duration-200">
          Jeremiah
        </Link>
        <Link href="/site/catalogue" className="p-4 hover:bg-gray-200 duration-200">
          Jeremiah Catalogue
        </Link>
        <Link href="/site/reviews" className="p-4 hover:bg-gray-200 duration-200">
          Jeremiah Reviews
        </Link>
        <Link href="/site/happy-birthday-jeremiah" className="p-4 hover:bg-gray-200 duration-200">
          Message from Noah
        </Link>
      </div>
      <div>
      </div>
    </div>
  );
}
