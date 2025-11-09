


const Navbar = () => {
  return (
  <nav className='py-3 border border-b-px border-b-[#ECECEC] '>
    <div className="container mx-auto">
     <div className="flex justify-between items-center gap-5">
        <div className="">
            <img src="/behance-logo.svg" alt="logo" />
        </div>
        <div className=" flex-1">
            <ul className="flex gap-2">
                <li><a href="#" className="font-bold text-[18px] text-black">For You</a></li>
                <li><a href="#" className="font-bold text-[18px] text-black">Discover</a></li>
                <li><a href="#" className="font-bold text-[18px] text-black">Livestreams</a></li>
                <li><a href="#" className="font-bold text-[18px] text-black">Hire</a></li>
                <li><a href="#" className="font-bold text-[18px] text-black">Jobs</a></li>
            </ul>
        </div>
        <div className="flex gap-3 justify-center">
          <button className="py-2.5 px-5 rounded-full bg-[#F5F8FF] border-[#DEE8FF] text-primary cursor-pointer">
            Log In
          </button>
          <button className="py-2.5 px-5 rounded-full  bg-primary text-white cursor-pointer">
            Sign Up
          </button>
          <span className="h-5 w-px bg-[#E8E8EE] mt-4"></span>
          <button className="py-2 px-5 cursor-pointer border-[#E8E8E8]">
            <img src="/Free Trial.svg" alt="Button" />

          </button>
          <button className="py-2 px-3 cursor-pointer">
            <img src="/adobe.svg" alt="Button" />

          </button>

        </div>
      
     </div>
             
    </div>
    
  </nav>
  )
}

export default Navbar
