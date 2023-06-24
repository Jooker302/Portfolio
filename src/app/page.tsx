import Image from 'next/image'

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

      <div className=" flex bg-[url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80')] bg-no-repeat bg-cover p-12">
        <div className='mt-12 flex flex-col items-start justify-center'>
          <div>
            <h1 className=' mt-4 pb-6 items-start justify-start flex flex-col pointer-events-none'>
              <span className='text-white m-3 text-6xl pointer-events-none'>
                My Name is </span>
              <br />
              <span className='text-gradient text-extra-bold text-8xl pointer-events-none'> ❝Omer Farooq❞</span>
            </h1>
          </div>
          <div className='px-12'>
            <p className='ml-6 text-4xl pointer-events-none text-white'>A Web Developer👨‍💻💓</p>
          </div>
        </div>
      </div>
    </div>
  )
}
