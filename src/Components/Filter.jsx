const Filter = () => {
  return (
    <section className="py-[26px] border border-b-px border-[#F2F2F2] mb-5">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <div className="flex items-center py-3 px-2.5 gap-1.5 border border-[#E8E8E8] rounded-[13px] cursor-pointer">
              <img src="/Icon.svg" alt="Icon" />
              <span className="font-bold">Creative Fields</span>
              <span>
                <img src="/Vector.svg" alt="Dropdown" />
              </span>
            </div>

            <div className="flex items-center py-3 px-2.5 gap-1.5 border border-[#E8E8E8] rounded-[13px] cursor-pointer">
              <img src="/rench.png" alt="Icon" />
              <span className="font-bold">Tools</span>
              <span>
                <img src="/Vector.svg" alt="Dropdown" />
              </span>
            </div>

            <div className="flex items-center py-3 px-2.5 gap-1.5 border border-[#E8E8E8] rounded-[13px] cursor-pointer">
              <img src="/color.png" alt="Icon" />
              <span className="font-bold">Color</span>
              <span>
                <img src="/Vector.svg" alt="Dropdown" />
              </span>
            </div>

            <div className="flex items-center py-3 px-2.5 gap-1.5 border border-[#E8E8E8] rounded-[13px] cursor-pointer">
              <img src="/location.png" alt="Icon" />
              <span className="font-bold">Location</span>
              <span>
                <img src="/Vector.svg" alt="Dropdown" />
              </span>
            </div>

            <div className="flex items-center py-3 px-2.5 gap-1.5 border border-[#E8E8E8] rounded-[13px] cursor-pointer">
              <img src="/graguate.png" alt="Icon" />
              <span className="font-bold">Schools</span>
              <span>
                <img src="/Vector.svg" alt="Dropdown" />
              </span>
            </div>

            <div className="flex items-center py-3 px-2.5 gap-1.5 border border-[#E8E8E8] rounded-[13px] cursor-pointer">
              <img src="/pin.png" alt="Icon" />
              <span className="font-bold">Assets</span>
              <span>
                <img src="/Vector.svg" alt="Dropdown" />
              </span>
            </div>

            <div className="flex items-center py-3 px-2.5 gap-1.5 border border-[#E8E8E8] rounded-[13px] cursor-pointer">
              <img src="/lock.png" alt="Icon" />
              <span className="font-bold">Subscriptions</span>
              <span>
                <img src="/Vector.svg" alt="Dropdown" />
              </span>
            </div>
          </div>
          <div className="">
            <p className="text-[#696969]">
                Sort
            </p>
            <span className="flex gap-[7px] cursor-pointer">
                Recommended
                <img src="/Vector.svg" alt="icon" />
            </span>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
