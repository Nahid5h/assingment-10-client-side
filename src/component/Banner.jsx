const Banner = () => {
  return (
    <div className="relative">
      <div className="carousel w-full h-[700px] rounded-2xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/p0vQQVY/futc-Re1-Uc-eabi8-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/PmMrHNt/markus-spiske-b-Xz-3-Dpsm-WE-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/4Yc5wps/alexey-artyukh-DLf3uwk-RNPA-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-0 ml-72 mt-52">
        <h1 className=" text-5xl text-center text-white">
          TRAVEL <br />
          <span className="">ALL TIME</span>
        </h1>
        <p className=" text-3xl text-white mt-10">Enjoy Your Travel Spot</p>
        <button className="btn w-full mt-10 rounded-full bg-[#f39c12]  text-white hover:text-orange-500">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
