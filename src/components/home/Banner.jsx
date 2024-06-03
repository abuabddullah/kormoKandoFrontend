import bannerImg1 from "./../../assets/task1.jpg";
import bannerImg2 from "./../../assets/task2.jpg";
import bannerImg3 from "./../../assets/task3.jpg";
import bannerImg4 from "./../../assets/task4.jpg";
const Banner = () => {
  return (
    <section className="relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-30 bg-gray-800 bg-opacity-75 px-16 md:p-20">
        <h1 className="text-xl md:text-4xl font-bold text-white">
          <span className="text-sm md:text-4xl">Welcome to</span> KORMOKANDO
        </h1>
        <p className="text-lg text-white">
          <small>Simplify Your Task Management with Ease</small>
        </p>
      </div>
      <div className="carousel w-full -z-10">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={bannerImg1} className="w-full h-96" />
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
          <img src={bannerImg2} className="w-full h-96" />
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
          <img src={bannerImg3} className="w-full h-96" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={bannerImg4} className="w-full h-96" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
