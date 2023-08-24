import psorti from "public/img/Psorti.png";
import phtg from "public/img/htg.png";
import palte from "public/img/alte.png";
import pqueenl from "public/img/queenl.png";
import pbreakgame from "public/img/breakgame.png";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="project" className="flex flex-col justify-between items-center bg-gradient-to-r from-blue-500 to-green-600 pointer-events-none">
      <p className="text-white text-3xl underline font-bold my-4 md:my-0 sm:text-5xl md:text-5xl">
        Projects
      </p>

      <div className="flex justify-around p-12 pb-0 md:pb-12 w-full items-center flex-wrap">
        <div className="bg-white p-6 m-2 rounded-lg text-center overflow-hidden sm:w-1/4 md:w-1/4 flex flex-col items-center justify-center">
          <p className="text-black text-xl font-bold my-2">Sortiment</p>
          <Image
            src={psorti}
            className=""
            width={100}
            height={100}
            alt="Picture of the author"
          ></Image>
          <div className="flex justify-center p-1 my-2 items-center">
            <span className="bg-red-500 rounded-xl px-1 mx-1 text-xs">
              Laravel
            </span>
            <span className="bg-orange-500 rounded-xl px-1 mx-1 text-xs">
              HTML
            </span>
            <span className="bg-blue-400 rounded-xl px-1 mx-1 text-xs">
              CSS
            </span>
            <span className="bg-yellow-400 rounded-xl px-1 mx-1 text-xs">
              JS
            </span>
          </div>
          <p className="text-center text-black overflow-auto">
            Sortiment is a dynamic and user-friendly e-commerce platform that
            revolutionizes the way you shop for clothing. With a vast array of
            categories to choose from, including trendy fashion, sportswear, and
            formal attire, Sortiment offers a seamless shopping experience with
            high-quality products and competitive prices. Discover your unique
            style and effortlessly upgrade your wardrobe with Sortiment.
          </p>
        </div>

        <div className="bg-white p-6 m-2 rounded-lg text-center overflow-hidden sm:w-1/4 md:w-1/4 flex flex-col items-center justify-center">
          <p className="text-black text-xl font-bold my-2">HTG Inspection</p>
          <Image
            src={phtg}
            className="rounded-xl"
            width={100}
            height={100}
            alt="Picture of the author"
          ></Image>
          <div className="flex justify-center p-1 my-2 items-center">
            <span className="bg-red-500 rounded-xl px-1 mx-1 text-xs">
              Laravel
            </span>
            <span className="bg-orange-500 rounded-xl px-1 mx-1 text-xs">
              HTML
            </span>
            <span className="bg-blue-400 rounded-xl px-1 mx-1 text-xs">
              CSS
            </span>
            <span className="bg-cyan-400 rounded-xl px-1 mx-1 text-xs">
              Flutter
            </span>
          </div>
          <p className="text-center text-black overflow-auto">
            HTG Inspection is a comprehensive task management system designed to
            streamline the inspection process. This mobile app, built with
            Flutter, seamlessly integrates with Laravel APIs to provide a robust
            and efficient solution. With its dashboard in Laravel, HTG enables
            users to assign and track tasks, ensuring timely completion and
            effective collaboration within the inspection workflow.
          </p>
        </div>

        <div className="bg-white p-6 m-2 rounded-lg text-center overflow-hidden sm:w-1/4 md:w-1/4 flex flex-col items-center justify-center">
          <p className="text-black text-xl font-bold my-2">Alte Ecommerce</p>
          <Image
            src={palte}
            className=""
            width={100}
            height={100}
            alt="Picture of the author"
          ></Image>
          <div className="flex justify-center p-1 my-2 items-center">
            <span className="bg-green-800 rounded-xl px-1 mx-1 text-xs">
              Node JS
            </span>
            <span className="bg-cyan-600 rounded-xl px-1 mx-1 text-xs">
              React
            </span>
          </div>
          <p className="text-center text-black overflow-auto">
            Alte Ecommerce is a cutting-edge online clothing store that
            leverages the power of Node.js APIs. With its sleek and
            user-friendly interface, Alte Ecommerce offers a seamless shopping
            experience for customers seeking the latest fashion trends. Powered
            by robust Node.js APIs, the platform ensures secure transactions,
            efficient inventory management, and seamless order processing{" "}
          </p>
        </div>
      </div>

      <div className="flex justify-around p-12 w-full pt-0  items-center flex-wrap">
        <div className="bg-white p-6 m-2 rounded-lg text-center overflow-hidden sm:w-1/4 md:w-1/4 flex flex-col items-center justify-center">
          <p className="text-black text-xl font-bold my-2">Queen Livestock</p>
          <Image
            src={pqueenl}
            className="rounded-xl"
            width={100}
            height={100}
            alt="Picture of the author"
          ></Image>
          <div className="flex justify-center p-1 my-2 items-center">
            <span className="from-red-500 to-blue-600 bg-gradient-to-r rounded-xl px-1 mx-1 text-xs">
              Java
            </span>
            <span className="bg-gray-500 rounded-xl px-1 mx-1 text-xs">
              XML
            </span>
            <span className=" bg-purple-600 rounded-xl px-1 mx-1 text-xs">
              SQLite
            </span>
          </div>
          <p className="text-center text-black overflow-auto">
            Queen Livestock is a Java XML-based marketplace for livestock,
            leveraging SQLite for efficient data storage. This user-friendly
            platform simplifies the buying and selling of livestock, providing a
            seamless experience for users. Connect with buyers and sellers in
            the livestock industry through Queen Livestock&apos;s streamlined
            and efficient Java XML and SQLite implementation.
          </p>
        </div>

        <div className="bg-white p-6 m-2 rounded-lg text-center overflow-hidden sm:w-1/4 md:w-1/4 flex flex-col items-center justify-center">
          <p className="text-black text-xl font-bold my-2">The Break Game</p>
          <Image
            src={pbreakgame}
            className=""
            width={100}
            height={100}
            alt="Picture of the author"
          ></Image>
          <div className="flex justify-center p-1 my-2 items-center">
            <span className="rounded-xl bg-sky-600 px-1 mx-1 text-xs">C++</span>
            <span className="rounded-xl bg-gradient-to-r from-black to-red-600 px-1 mx-1 text-xs">
              Opengl
            </span>
          </div>
          <p className="text-center text-black overflow-auto">
            The Break Game is a straightforward and engaging game built using
            C++ and OpenGL. Featuring a central bar, your objective is to
            prevent the ball from hitting the bottom. With its immersive
            graphics and smooth gameplay, The Break Game provides an enjoyable
            gaming experience. Challenge yourself and test your reflexes in this
            C++ and OpenGL-powered game.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Projects;
