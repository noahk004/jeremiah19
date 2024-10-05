import Nav from "@/app/components/Nav";

export default function Page() {
  return (
    <div>
      <Nav />
      <div className="flex justify-center mt-[100px]">
        <div className="max-w-[400px] mb-[100px]">
          <h1 className="font-bold text-4xl mb-6">Message from Noah</h1>
          <p className=" mb-3">
            Yoo happy birthday! Thanks for being an awesome friend and brother.
            Living in the same apartment as you has been super fun-- it's always
            super chill talking to you here and there. I really like your sense
            of humor, in fact, joking around about food with you and also making
            random conversation while we're eating has made it a lot easier for
            me to cut tbh.
          </p>
          <p className="mb-3">
            Your work ethic and heart for God pushes me to do better in my own
            life. I'm thankful to be your apartment mate and I hope we can hang
            out more as the year progresses.
          </p>
          <p className="mb-3">Happy birthday :3 hope you liked the website lol</p>
          <p className="mb-[70px]">- Noah</p>
          <a href="https://github.com/noahk004/jeremiah19" className="mb-3 text-blue-600 underline">Repo link</a>
        </div>
      </div>
    </div>
  );
}
