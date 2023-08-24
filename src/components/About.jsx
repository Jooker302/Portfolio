import Image from "next/image";

const About = () => {
    return(
        <div>
        <div
          id="about"
          className="pointer-events-none flex flex-wrap sm:flex-nowrap md:flex-nowrap justify-between items-center bg-gradient-to-r from-blue-500 to-green-600 p-10"
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
    );
} 

export default About;