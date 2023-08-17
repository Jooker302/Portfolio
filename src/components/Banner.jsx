import { Dancing_Script } from "next/font/google";

const dancing_Script = Dancing_Script({
    subsets: ["latin"],
  });

const Banner = () => {
    return(
        <div className="flex bg-fixed bg-[url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80')] bg-no-repeat bg-cover p-12">
        <div className="mt-12 flex flex-col items-start justify-center">
          <div className="">
            <div className="mt-4 pb-6 items-start justify-start flex flex-col pointer-events-none">
              <span className="text-white md:ml-4 md:m-3 md:text-6xl text-3xl pointer-events-none">
                My Name is{" "}
              </span>
              <br />
              <span
                className={`text-gradient md:h-28 font-bold text-4xl md:text-8xl sm:text-8xl pointer-events-none ${dancing_Script.className}`}
              >
                ❝Omer Farooq❞
              </span>
            </div>
          </div>
          <div className="sm:px-12">
            <p className="sm:ml-6 md:ml-6 text-2xl md:text-4xl sm:text-4xl pointer-events-none text-white">
              A Web & Mobile Developer👨‍💻💓
            </p>
          </div>
        </div>
      </div>
    );
}

export default Banner;