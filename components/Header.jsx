import Link from "next/link";

const Header = () => {
  return (
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
  );
};

export default Header;
