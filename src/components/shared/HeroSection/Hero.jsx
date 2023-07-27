import React from 'react';
import bgImage from '../../../assets/Images/online-tutorial.png';
import Container from '../Container';

const Hero = () => {
  return (
    <div className='py-10 bg-cover bg-center bg-no-repeat bg-[url("../src/assets/Images/bg_image.svg")]'>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-5 items-center justify-center">
              <div className="col-span-3 felx flex-col gap-y-3">
                <span>Digital Education</span>
                <h2>Improve Your Digital Skills</h2>
                <p>
                  To make learning more engaging, we incorporate a variety of
                  multimedia resources such as videos,
                </p>
                <div className="form-control">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Search…"
                      className="input input-bordered"
                    />
                    <button className="btn btn-square bg-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <img src={bgImage} alt="" />
              </div>
            </div>
          </Container>
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          hic enim aperiam accusantium doloremque velit culpa sint obcaecati
          officiis eaque necessitatibus rem! Aut, ipsam rem optio illo ducimus
          voluptatibus recusandae.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ratione
          recusandae necessitatibus quia, qui, cumque architecto at sunt libero
          sequi accusantium reiciendis aperiam id sapiente! Provident mollitia
          similique ad quam.
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
          <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
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
    </div>
  );
};

export default Hero;