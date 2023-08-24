import nodejsimg from "/public/img/nodejs.png";
import htmlimg from "/public/img/html.png";
import cssimg from "/public/img/css.png";
import javaimg from "/public/img/java.png";
import tailwindimg from "/public/img/tailwind.png";
import jsimg from "/public/img/js.png";
import bootstarpimg from "public/img/bootstrap.png";
import cimg from "public/img/c.png";
import laravelimg from "public/img/laravel.png";
import phpimg from "public/img/php.png";
import pythonimg from "public/img/python.png";
import nextimg from "public/img/next.png";
import Image from "next/image";

const Technologies = () => {
  return (
    <div id="stack" className="pointer-events-none bg-gradient-to-r from-blue-500 to-green-600 flex justify-center flex-col items-center md:p-20 sm:p-20">
      <div>
        <p className="md:text-5xl sm:text-5xl text-3xl font-bold underline p-8 pt-0">
          Technologies
        </p>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 w-screen px-8 flex justify-around items-center">
            <Image
              src={nextimg}
              className="rounded-xl my-6 md:m-6 sm:m-6"
              width={50}
              height={50}
              alt="Picture of the author"
            ></Image>
            <div className="md:w-full sm:w-full w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
              <div className="bg-gradient-to-r from-gray-700 to-black h-2.5 rounded-full md:w-80 sm:w-80 w-56"></div>
            </div>
          </div>
          <div className="md:w-1/2 w-screen px-8 flex justify-around items-center mt-4 md:mt-0">
            <Image
              src={nodejsimg}
              className="rounded-xl my-6 md:m-6 sm:m-6"
              width={50}
              height={50}
              alt="Picture of the author"
            ></Image>
            <div className="md:w-full sm:w-full w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
              <div className="bg-gradient-to-r to-gray-700 from-green-700 h-2.5 md:w-80 sm:w-80 w-56 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 w-screen px-8 flex justify-around items-center ">
            <Image
              src={htmlimg}
              className="rounded-xl my-6 md:m-6 sm:m-6"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <div className="md:w-full sm:w-full w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
              <div className="bg-gradient-to-r to-orange-600 from-gray-300 h-2.5 rounded-full md:w-92 sm:w-92 "></div>
            </div>
          </div>
          <div className="md:w-1/2 w-screen px-8 flex justify-around items-center mt-4 md:mt-0">
            <Image
              src={cssimg}
              className="rounded-xl my-6 md:m-6 sm:m-6"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <div className="md:w-full sm:w-full w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
              <div className="bg-gradient-to-r from-gray-300 to-blue-400 h-2.5 rounded-full md:w-80 sm:w-80 w-56"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="md:w-1/2 w-screen px-8 flex justify-around items-center">
            <Image
              src={bootstarpimg}
              className="rounded-xl my-6 md:m-6 sm:m-6"
              width={50}
              height={50}
              alt="Picture of the author"
            ></Image>
            <div className="md:w-full sm:w-full w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
              <div className="bg-gradient-to-r from-purple-400 to-purple-950 h-2.5 rounded-full md:w-72 sm:w-72 w-48"></div>
            </div>
          </div>
          <div className="md:w-1/2 w-screen px-8 flex justify-around items-center mt-4 md:mt-0">
            <Image
              src={tailwindimg}
              className="rounded-xl my-6 md:m-6 sm:m-6"
              width={50}
              height={50}
              alt="Picture of the author"
            ></Image>
            <div className="md:w-full sm:w-full w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
              <div className="bg-gradient-to-r from-blue-300 to-blue-900 md:w-72 sm:w-72 w-48 h-2.5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="md:w-1/2 w-screen px-8 flex justify-around items-center">
            <Image
              src={laravelimg}
              className="rounded-xl my-6 md:m-6 sm:m-6"
              width={50}
              height={50}
              alt="Picture of the author"
            ></Image>
            <div className="md:w-full sm:w-full w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
              <div className="bg-gradient-to-r from-red-400 to-red-600 md:w-92 sm:w-92 h-2.5 rounded-full"></div>
            </div>
          </div>
          <div className="md:w-1/2 w-screen px-8 flex justify-around items-center mt-4 md:mt-0">
            <Image
              src={phpimg}
              className="rounded-xl my-6 md:m-6 sm:m-6"
              width={50}
              height={50}
              alt="Picture of the author"
            ></Image>
            <div className="md:w-full sm:w-full w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
              <div className="bg-gradient-to-r from-purple-600 to-blue-800 h-2.5 rounded-full md:w-92 sm:w-92"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="md:w-1/2 w-screen px-8 flex justify-around items-center">
            <Image
              src={javaimg}
              className="rounded-xl my-6 md:m-6 sm:m-6"
              width={50}
              height={50}
              alt="Picture of the author"
            ></Image>
            <div className="md:w-full sm:w-full w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
              <div className="bg-gradient-to-r from-red-500 to-blue-700 h-2.5 rounded-full md:w-80 sm:w-80 w-56"></div>
            </div>
          </div>
          <div className="md:w-1/2 w-screen px-8 flex justify-around items-center mt-4 md:mt-0">
            <Image
              src={cimg}
              className="rounded-xl my-6 md:m-6 sm:m-6"
              width={50}
              height={50}
              alt="Picture of the author"
            ></Image>
            <div className="md:w-full sm:w-full w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
              <div className="bg-gradient-to-r from-zinc-100 via-blue-600 to-cyan-500 h-2.5 rounded-full md:w-64 sm:w-64 w-40"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="md:w-1/2 w-screen px-8 flex justify-around items-center">
            <Image
              src={jsimg}
              className="rounded-xl my-6 md:m-6 sm:m-6"
              width={50}
              height={50}
              alt="Picture of the author"
            ></Image>
            <div className="md:w-full sm:w-full w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
              <div className="bg-gradient-to-r  to-yellow-400 from-black h-2.5 rounded-full md:w-72 sm:w-72 w-48"></div>
            </div>
          </div>
          <div className="md:w-1/2 w-screen px-8 flex justify-around items-center mt-4 md:mt-0">
            <Image
              src={pythonimg}
              className="rounded-xl my-6 md:m-6 sm:m-6"
              width={50}
              height={50}
              alt="Picture of the author"
            ></Image>
            <div className="md:w-full sm:w-full w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
              <div className="bg-gradient-to-r from-blue-500 to-yellow-500 h-2.5 rounded-full md:w-64 sm:w-64 w-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Technologies;
