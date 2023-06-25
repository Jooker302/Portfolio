import Image from 'next/image'
import Link from 'next/link'
import { Dancing_Script } from 'next/font/google'
import nodejsimg from '/public/img/nodejs.png'
import htmlimg from '/public/img/html.png'
import cssimg from '/public/img/css.png'
import javaimg from '/public/img/java.png'
import tailwindimg from '/public/img/tailwind.png'
import jsimg from '/public/img/js.png'
import bootstarpimg from 'public/img/bootstrap.png'
import cimg from 'public/img/c.png'
import laravelimg from 'public/img/laravel.png'
import phpimg from 'public/img/php.png'
import pythonimg from 'public/img/python.png'
import instaimg from 'public/img/insta.svg'
import discordimg from 'public/img/discord.svg'
import linkedinimg from 'public/img/linkedin.svg'
import githubimg from 'public/img/github.svg'



const dancing_Script = Dancing_Script({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div>
      <div className='flex justify-between bg-gradient-to-r from-blue-500 to-green-600 items-center'>
        <div>
          <p className='text-bold text-white m-2 ml-4 text-3xl'>Portfolio</p>
        </div>
        <div className='flex justify-center p-2 text-xl'>
          <a href="" className='m-2'>Home</a>
          <a href="" className='m-2'>About</a>
        </div>
      </div>

      <div className="flex bg-[url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80')] bg-no-repeat bg-cover p-12">
        <div className='mt-12 flex flex-col items-start justify-center'>
          <div className=''>
            <div className='mt-4 pb-6 items-start justify-start flex flex-col pointer-events-none'>
              <span className='text-white ml-4 m-3 text-6xl pointer-events-none'>
                My Name is </span>
              <br />
              <span className={`text-gradient h-28 text-extra-bold text-8xl pointer-events-none ${dancing_Script.className}`}>
                ❝Omer Farooq❞
              </span>
            </div>
          </div>
          <div className='px-12'>
            <p className='ml-6 text-4xl pointer-events-none text-white'>A Web & Mobile Developer👨‍💻💓</p>
          </div>
        </div>
      </div>

      <div>
        <div className='flex justify-between items-center bg-gradient-to-r from-blue-500 to-green-600 p-10'>
          <div className='m-8 mt-12 col-8'>
            <h1 className='text-7xl underline'>About Me</h1>
            <p className='text-white m-7 ml-0'>Passionate about technology and AI and Game Development, I&apos;m Omer Farooq, a web developer with a thirst for innovation. I
              strive to create dynamic and captivating web and mobile applications. Join me on this exciting journey as we push
              the boundaries of what&apos;s possible in the world of technology. Together, let&apos;s bring ideas to life and
              shape the future!</p>
          </div>
          <div className='border-4 border-white m-10 ml-12 rounded-2xl col-4'>
            <Image src="/main.jpg" className='rounded-xl' width={500} height={500} alt="Picture of the author" />
          </div>

          <div>

          </div>
        </div>
      </div>
      <div className='bg-gradient-to-r from-blue-500 to-green-600 flex justify-center flex-col items-center p-20'>
        <div>
          <p className='text-5xl underline p-8 pt-0'>Technologies</p>
        </div>
        <div className='w-full'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-1/2 px-8 flex justify-around items-center'>
              <Image src="/next.svg" className='rounded-xl m-6' width={50} height={50} alt="Picture of the author"></Image>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div className="bg-gradient-to-r from-gray-700 to-black h-2.5 rounded-full w-80" ></div>
              </div>


            </div>
            <div className='md:w-1/2 px-8 flex justify-around items-center mt-4 md:mt-0'>
              <Image src={nodejsimg} className='rounded-xl m-6' width={50} height={50} alt="Picture of the author"></Image>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div className="bg-gradient-to-r to-gray-700 from-green-700 h-2.5 w-80 rounded-full" ></div>
              </div>


            </div>


          </div>
        </div>


        <div className='w-full'>
  <div className='flex flex-col md:flex-row justify-between items-center'>
    <div className='md:w-1/2 px-8 flex justify-around items-center '>
      <Image src={htmlimg} className='rounded-xl m-6' width={50} height={50} alt="Picture of the author" />
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
        <div className="bg-gradient-to-r to-orange-600 from-gray-300 h-2.5 rounded-full w-92 " ></div>
      </div>
    </div>
    <div className='md:w-1/2 px-8 flex justify-around items-center mt-4 md:mt-0'>
      <Image src={cssimg} className='rounded-xl m-6' width={50} height={50} alt="Picture of the author" />
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
        <div className="bg-gradient-to-r from-gray-300 to-blue-400 h-2.5 rounded-full w-80" ></div>
      </div>
    </div>
  </div>
</div>


        <div className='w-full'>
          <div className='flex flex-col md:flex-row justify-between items-center '>
            <div className='md:w-1/2 px-8 flex justify-around items-center'>
              <Image src={bootstarpimg} className='rounded-xl m-6' width={50} height={50} alt="Picture of the author"></Image>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div className="bg-gradient-to-r from-purple-400 to-purple-950 h-2.5 rounded-full w-72" ></div>
              </div>


            </div>
            <div className='md:w-1/2 px-8 flex justify-around items-center mt-4 md:mt-0'>
              <Image src={tailwindimg} className='rounded-xl m-6' width={50} height={50} alt="Picture of the author"></Image>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div className="bg-gradient-to-r from-blue-300 to-blue-900 w-72 h-2.5 rounded-full" ></div>
              </div>


            </div>


          </div>
        </div>

        <div className='w-full'>
          <div className='flex flex-col md:flex-row justify-between items-center '>
            <div className='md:w-1/2 px-8 flex justify-around items-center'>
              <Image src={laravelimg} className='rounded-xl m-6' width={50} height={50} alt="Picture of the author"></Image>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div className="bg-gradient-to-r from-red-400 to-red-600 w-92 h-2.5 rounded-full" ></div>
              </div>


            </div>
            <div className='md:w-1/2 px-8 flex justify-around items-center mt-4 md:mt-0'>
              <Image src={phpimg} className='rounded-xl m-6' width={50} height={50} alt="Picture of the author"></Image>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div className="bg-gradient-to-r from-purple-600 to-blue-800 h-2.5 rounded-full w-92" ></div>
              </div>


            </div>


          </div>
        </div>

        <div className='w-full'>
          <div className='flex flex-col md:flex-row justify-between items-center '>
            <div className='md:w-1/2 px-8 flex justify-around items-center'>
              <Image src={javaimg} className='rounded-xl m-6' width={50} height={50} alt="Picture of the author"></Image>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div className="bg-gradient-to-r from-red-500 to-blue-700 h-2.5 rounded-full w-80" ></div>
              </div>


            </div>
            <div className='md:w-1/2 px-8 flex justify-around items-center mt-4 md:mt-0'>
              <Image src={cimg} className='rounded-xl m-6' width={50} height={50} alt="Picture of the author"></Image>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div className="bg-gradient-to-r from-zinc-100 via-blue-600 to-cyan-500 h-2.5 rounded-full w-64" ></div>
              </div>


            </div>


          </div>
        </div>

        <div className='w-full'>
          <div className='flex flex-col md:flex-row justify-between items-center '>
            <div className='md:w-1/2 px-8 flex justify-around items-center'>
              <Image src={jsimg} className='rounded-xl m-6' width={50} height={50} alt="Picture of the author"></Image>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div className="bg-gradient-to-r  to-yellow-400 from-black h-2.5 rounded-full w-72" ></div>
              </div>


            </div>
            <div className='md:w-1/2 px-8 flex justify-around items-center mt-4 md:mt-0'>
              <Image src={pythonimg} className='rounded-xl m-6' width={50} height={50} alt="Picture of the author"></Image>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div className="bg-gradient-to-r from-blue-500 to-yellow-500 h-2.5 rounded-full w-64" ></div>
              </div>


            </div>


          </div>
        </div>



      </div>

      <div className="flex bg-[url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80')] bg-no-repeat bg-cover justify-center">

        <div className='bg-white m-24 px-72 py-20 flex flex-col justify-between items-center bg-opacity-50 rounded-3xl'>
          <p className='text-black text-3xl bold mb-6 mt-0'>Contact Us</p>
          <form className='flex flex-col justify-around items-center' action="" method="">
            <label htmlFor="name" className='text-black m-2'>Name</label>
            <input className='rounded-xl border-2 text-center border-gray-400' type="text" name="name" id="name" placeholder='Name'/>
            <label htmlFor="email" className='text-black m-2'>Email</label>
            <input type="email" className='rounded-xl text-center border-2 border-gray-400' name="email" id="email" placeholder='Email'/>
            <label htmlFor="message" className='text-black m-2'>Message</label>
            <input type="text" className='rounded-xl h-16 text-center border-2 border-gray-400' name="message" id="message" placeholder='Message'/>
            
            

            </form>

        </div>

      </div>


    <div className='bg-gradient-to-r from-blue-500 to-green-600'>
      <div className='flex justify-center py-3'>
        <a href="https://github.com/Jooker302" className='rounded-full px-2'>
        <Image src={githubimg} className='rounded-full fill-white border-2 border-white' width={50} height={50} alt="Picture of the author"></Image>
        </a>
        <a href="https://www.linkedin.com/in/i-m-omeree/" className='rounded-full px-2'>
        <Image src={linkedinimg} className='rounded-full border-2 border-white' width={50} height={50} alt="Picture of the author"></Image>
        </a>
        <a href="https://discord.com/users/thejooker302" className='rounded-full px-2'>
        <Image src={discordimg} className='rounded-full border-2 border-white' width={50} height={50} alt="Picture of the author"></Image>
        </a>
        <a href="https://instagram.com/i.omer_ee?igshid=ZDc4ODBmNjlmNQ==" className='rounded-full px-2'>
        <Image src={instaimg} className='rounded-full border-2 border-white' width={50} height={50} alt="Picture of the author"></Image>
        </a>
      </div>

      <div className='flex justify-center items-center py-3'>
        <p >© Copyright 2023 💝</p>
      </div>

    </div>



    </div>

  )
}
