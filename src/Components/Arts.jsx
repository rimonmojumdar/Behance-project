const Arts = () => {
  return (
    <section className="mb-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-5 ">
          <div className="arts_gallery h-full w-full rounded-lg">
            <img src="/photos/car.jpg" alt="image" className="mb-2" />
            <div className="flex items-center">
              <div>
                <h4 className="font-bold">2d Arcade style experiments</h4>
                <h5>ARCADE STUDIO</h5>
              </div>
              <div className=" flex gap-2">
                <div className="flex gap-1 items-center">
                  <img src="/Vector_like.png" alt="" />
                  <p>95</p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src="/view.png" alt="" />
                  <p>616</p>
                </div>
              </div>
            </div>
          </div>

          <div className="arts_gallery h-full w-full rounded-lg">
            <img src="/photos/uncle.jpg" alt="image" className="mb-2" />
            <div className="flex items-center gap-2">
              <div>
                <h4 className="font-bold">Fashion Illustration Vol.22</h4>
                <h5>SEUNGWON HONG</h5>
              </div>
              <div className=" flex gap-3.5">
                <div className="flex gap-1 items-center">
                  <img src="/Vector_like.png" alt="" />
                  <p>95</p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src="/view.png" alt="" />
                  <p>616</p>
                </div>
              </div>
            </div>
          </div>

          <div className="arts_gallery h-full w-full rounded-lg">
            <img src="/photos/Art.jpg" alt="image" className="mb-2" />
            <div className="flex items-center gap-14">
              <div>
                <h4 className="font-bold">A search for mother</h4>
                <h5>Bade Fuwa</h5>
              </div>
              <div className=" flex gap-3.5">
                <div className="flex gap-1 items-center">
                  <img src="/view.png" alt="" />
                  <p>95</p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src="/Vector_like.png" alt="" />
                  <p>616</p>
                </div>
              </div>
            </div>
          </div>
          <div className="arts_gallery h-full w-full rounded-lg">
            <img src="/photos/cartoon.jpg" alt="image" className="mb-2" />
            <div className="flex items-center gap-21">
              <div>
                <h4 className="font-bold">Cow Cow Cow!</h4>
                <h5>Multiple Owners</h5>
              </div>
              <div className=" flex gap-3.5">
                <div className="flex gap-1 items-center">
                  <img src="/view.png" alt="" />
                  <p>95</p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src="/Vector_like.png" alt="" />
                  <p>616</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arts;
