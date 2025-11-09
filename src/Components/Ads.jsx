

const Ads = () => {
  return (
  <section>
    <div className="container mx-auto">
        <div className="grid grid-cols-5 bg-[#F2F2F2]">
            <div className="p-7.5 gap-16">
                <h3 className="font-bold pb-1">
                    Create with Creative Cloud
                </h3>
                <h5 className="pb-7.5">
                    Whatever you want to create, Adobe Creative Cloud has what you need to make it amazing.
                </h5>
                <button className="px-5 py-2.5 bg-primary rounded-full text-white cursor-pointer">
                    See all plans

                </button>
            </div>
            <div className="p-7.5">
                <img className="pb-7 rounded-[10px]"
                 src="/photos/creative-cloud-product-image.png.jpg" alt="" />
                 <div className="flex gap-3 items-center">
                    <div>
                        <img src="/Frame.png" alt="" />
                    </div>
                    <div>
                        <h3>Creative Cloud All Apps</h3>
                    </div>
                    </div>
                 <p className="flex items-center text-[#696969] pl-7 py-2.5">Easily create stunning social graphics, short videos, and web pages that make you stand out.</p>

            </div>


            <div className="p-7.5">
                <img className="pb-7 rounded-[10px]"
                 src="/photos/photoshop-product-image.png.jpg" alt="" />
                 <div className="flex gap-3 items-center">
                    <div>
                        <img src="/ps.png" alt="" />
                    </div>
                    <div>
                        <h3>Photoshop - Image editing & design</h3>
                    </div>
                    </div>
                 <p className="flex items-center text-[#696969] pl-7 py-2.5">Create beautiful images, graphics, paintings, and 3D artwork on your desktop or iPad.</p>

            </div>
            <div className="p-7.5">
                <img className="pb-7 rounded-[10px]"
                 src="/photos/illustrator-product-image.png.jpg" alt="" />
                 <div className="flex gap-3 items-center">
                    <div>
                        <img src="/ai.png" alt="" />
                    </div>
                    <div>
                        <h3>Illustrator - Logos, icons & illustration</h3>
                    </div>
                    </div>
                 <p className="flex items-center text-[#696969] pl-7 py-2.5">Create beautiful designs, icons, and more — then use them anyplace at any size.</p>

            </div>
            <div className="p-7.5">
                <img className="pb-7 rounded-[10px]"
                 src="/photos/premiere-product-image.png.jpg" alt="" />
                 <div className="flex gap-3 items-center">
                    <div className="">
                        <img src="/pr.png" alt="" />
                    </div>
                    <div>
                        <h3>Premiere Pro - Video editing</h3>
                    </div>
                    </div>
                 <p className="flex items-center text-[#696969] pl-7 py-2.5">Create everything from social clips to feature films with the leading video editor.</p>

            </div>

        </div>

    </div>
  </section>
  )
}

export default Ads
