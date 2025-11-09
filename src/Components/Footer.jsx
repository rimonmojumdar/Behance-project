

const Footer = () => {
  return (
   <footer>
    <div className="container mx-auto">
            <div className="flex items-center px-5 py-2.5 gap-2">
                <h3 className="text-[#696969]">
                    More Behance
                </h3>
                <div>
                    <img src="/Caret.png" alt="" />
                </div>
                <div className="broder border border-[#696969] h-10 w-px">

                </div>
                <h3 className="text-[#696969]">
                    English
                </h3>
                <div>
                    <img src="/Caret.png" alt="" />
                </div>
                <div className="broder border border-[#696969] h-10 w-px">

                </div>
                 <div className="flex justify-between gap-5">
            <div className="flex gap-2.5 text-[#696969]">
                <a className="pl-7.5" href="#">TOU</a>
                <a href="#">Privacy</a>
                <a href="#">Community</a>
                <a href="#">Help</a>
                <a href="#">Cookie preferences</a>
                <h3 className="pl-5">
                    Do not sell or share my personal information
                </h3>
            </div>
            <div className="flex cursor-pointer justify-end ml-45">
                <img src="/adobe.svg" alt="" />
            </div>
        </div>

        </div>
        </div>
   </footer>
  )
}

export default Footer
