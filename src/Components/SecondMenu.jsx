import Search from "./Search"

const SecondMenu = () => {
  return (
  <section className="mt-6">
    <div className="container mx-auto">
          <div className="grid grid-cols-[1fr_auto] gap-2">
      <Search/>
      <div className="flex px-[18px] gap-2 items-center border border-[#CCCCCC] rounded-r-full">
        <button className="bg-black text-white rounded-full py-1.5 px-3.5">
            <a href="#">Projects</a>
        </button>
        <a href="#" className="font-bold">Images</a>
        <a href="#" className="font-bold">Prototypes</a>
        <a href="#" className="font-bold">Streams</a>
        <a href="#" className="font-bold">People</a>
        <a href="#" className="font-bold">Moodboards</a>
        

      </div>

    </div>

    </div>
  </section>
  )
}

export default SecondMenu
