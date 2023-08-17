"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dancing_Script } from "next/font/google";
import toast, { Toaster } from "react-hot-toast";
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
import instaimg from "public/img/insta.svg";
import discordimg from "public/img/discord.svg";
import linkedinimg from "public/img/linkedin.svg";
import githubimg from "public/img/github.svg";
import nextimg from "public/img/next.png";
import psorti from "public/img/Psorti.png";
import phtg from "public/img/htg.png";
import palte from "public/img/alte.png";
import pqueenl from "public/img/queenl.png";
import pbreakgame from "public/img/breakgame.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter,faTelegram,faGithub,faLinkedin,faDiscord,faInstagram } from '@fortawesome/free-brands-svg-icons';

const dancing_Script = Dancing_Script({
  subsets: ["latin"],
});

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleContact = (e: any) => {
    e.preventDefault();
    if (submitted === false) {
      

      // console.log("sending");
      
        if (!name || !email || !message) {
          toast.error("Please fill in all fields.");
          return;
        }
        
        setSubmitted(true);

      let data = {
        name,
        email,
        message,
      };

      // console.log(data)
      const wait = fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          // console.log('Response received')
          if (res.status === 200) {
            // console.log('Response succeeded!',res)
            setSubmitted(true);
            setName("");
            setEmail("");
            setMessage("");
            // toast.success('Mail Sent!')
            setSubmitted(false);
          }
        })
        .catch((error) => {
          toast.error("An error occurred. Please try again later.");
        });

      toast.promise(wait, {
        loading: "Sending",
        success: "Mail Sent",
        error: "Some Error Occur",
      });
    
    } else {
      toast.error("Wait!");
    }
  };


  return (
    <div>
      <div className="flex justify-between bg-gradient-to-r from-blue-500 to-green-600 items-center">
        <div>
          <p className="text-bold text-white m-2 ml-4 text-3xl">Portfolio</p>
        </div>
        <div className="flex justify-center p-2 text-xl">
          <a href="" className="m-2">
            Home
          </a>
          {/* <a href="#aboutme" className='m-2'>About</a> */}
          <Link href="#aboutme" className="m-2" scroll={false}>
            About
          </Link>
        </div>
      </div>

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

      <div>
        <div
          id="aboutme"
          className="flex flex-wrap sm:flex-nowrap md:flex-nowrap justify-between items-center bg-gradient-to-r from-blue-500 to-green-600 p-10"
        >
          <div className="m-8 mt-12 col-8">
            <h1 className="sm:text-7xl md:text-7xl text-3xl underline">
              About Me
            </h1>
            <p className="text-white m-7 ml-0">
              Passionate about technology and AI and Game Development, I&apos;m
              Omer Farooq, a web developer with a thirst for innovation. I
              strive to create dynamic and captivating web and mobile
              applications. Join me on this exciting journey as we push the
              boundaries of what&apos;s possible in the world of technology.
              Together, let&apos;s bring ideas to life and shape the future!
            </p>
          </div>
          <div className="border-4 border-white m-10 ml-12 rounded-2xl col-4">
            <Image
              src="/main.jpg"
              className="rounded-xl"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>

          <div></div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-green-600 flex justify-center flex-col items-center md:p-20 sm:p-20">
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

      <div className="flex flex-col justify-between items-center bg-gradient-to-r from-blue-500 to-green-600">
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
              categories to choose from, including trendy fashion, sportswear,
              and formal attire, Sortiment offers a seamless shopping experience
              with high-quality products and competitive prices. Discover your
              unique style and effortlessly upgrade your wardrobe with
              Sortiment.
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
              HTG Inspection is a comprehensive task management system designed
              to streamline the inspection process. This mobile app, built with
              Flutter, seamlessly integrates with Laravel APIs to provide a
              robust and efficient solution. With its dashboard in Laravel, HTG
              enables users to assign and track tasks, ensuring timely
              completion and effective collaboration within the inspection
              workflow.
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
              experience for customers seeking the latest fashion trends.
              Powered by robust Node.js APIs, the platform ensures secure
              transactions, efficient inventory management, and seamless order
              processing{" "}
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
              platform simplifies the buying and selling of livestock, providing
              a seamless experience for users. Connect with buyers and sellers
              in the livestock industry through Queen Livestock&apos;s
              streamlined and efficient Java XML and SQLite implementation.
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
              <span className="rounded-xl bg-sky-600 px-1 mx-1 text-xs">
                C++
              </span>
              <span className="rounded-xl bg-gradient-to-r from-black to-red-600 px-1 mx-1 text-xs">
                Opengl
              </span>
            </div>
            <p className="text-center text-black overflow-auto">
              The Break Game is a straightforward and engaging game built using
              C++ and OpenGL. Featuring a central bar, your objective is to
              prevent the ball from hitting the bottom. With its immersive
              graphics and smooth gameplay, The Break Game provides an enjoyable
              gaming experience. Challenge yourself and test your reflexes in
              this C++ and OpenGL-powered game.
            </p>
          </div>
        </div>
      </div>

      <div className="flex bg-fixed bg-[url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80')] bg-no-repeat bg-cover justify-center">
        <div className="bg-white md:m-24 m-8 py-10 px-10 sm:px-72 sm:py-20 md:px-72 md:py-20 flex flex-col justify-between items-center bg-opacity-50 rounded-3xl">
          <p className="text-black md:text-5xl text-3xl font-bold bold mb-6 mt-0">
            Contact Me
          </p>
          <form
            className="flex flex-col justify-around items-center"
            action=""
            method=""
          >
            <label htmlFor="name" className="text-black m-2">
              Name
            </label>
            <input
              required
              className="rounded-xl md:h-8 border-2 h-8 text-black border-gray-400"
              value={name}
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              name="name"
              id="name"
              placeholder="Name"
            />
            <label htmlFor="email" className="text-black m-2">
              Email
            </label>
            <input
              required
              type="email"
              className="rounded-xl h-8 md:h-8 text-black border-2 border-gray-400"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              id="email"
              placeholder="Email"
            />
            <label htmlFor="message" className="text-black m-2">
              Message
            </label>
            <textarea
              required
              className="rounded-xl md:h-24 w-56 h-24 md:w-56 text-black border-2 border-gray-400"
              value={message}
              name="message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              id="message"
              placeholder="Message"
            ></textarea>
            <button
              className="m-2 my-4 mb-0 border-2 border-black text-black hover:text-white  p-4 py-2 rounded-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-600 hover:font-bold"
              onClick={(e) => {
                handleContact(e);
              }}
              type="submit"
            >
              {submitted === false ? "Submit" : "Sending"}
            </button>
          </form>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-green-600">
        <div className="flex justify-center py-3">
        <a className="m-2" href="https://github.com/Jooker302"><FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '#ffffff', width: '40px', height: '40px' }} /></a>
         
          <a className="m-2" href="https://www.linkedin.com/in/i-m-omeree/"><FontAwesomeIcon icon={faLinkedin} size="lg" style={{ color: '#ffffff', width: '40px', height: '40px' }} /></a>
          
          <a className="m-2" href="https://discord.com/users/thejooker302"><FontAwesomeIcon icon={faDiscord} size="lg" style={{ color: '#ffffff', width: '40px', height: '40px' }} /></a>
         
          <a className="m-2" href="https://instagram.com/i.omer_ee?igshid=ZDc4ODBmNjlmNQ=="><FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: '#ffffff', width: '40px', height: '40px' }} /></a>
       
        </div>

        <div className="flex justify-center items-center pt-0 py-3">
          <p>Design 💝 By Me 😁</p>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
