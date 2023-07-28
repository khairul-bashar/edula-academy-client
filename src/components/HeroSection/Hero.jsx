import React from 'react';
import bgImage from '../../assets/Images/bg_image.svg';
import bgImage2 from '../../assets/Images/soft-_skill.png';
import bgImage3 from '../../assets/Images/youth_skills.png';
import Heading from '../shared/Heading/Heading';
import Container from '../shared/Container';
import Subtitle from '../shared/Heading/Subtitle';

const Hero = () => {
  return (
    <div className='py-10 md:py-28 bg-cover bg-center bg-no-repeat bg-[url("../src/assets/Images/bg_image.svg")]'>
      <Container>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="max-w-6xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
              <div className="grid grid-cols-1 md:grid-cols-5 items-center justify-center">
                <div className="col-span-3 flex flex-col gap-3 w-96">
                  <Subtitle label="Digital Education" />
                  <Heading
                    title="Improve Your Digital Skills"
                    subtitle="To make learning more engaging, we incorporate a variety of
                  multimedia resources such as videos," white
                  />
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
                <div className="col-span-2 hidden md:block">
                  <img src={bgImage} alt="" />
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="max-w-6xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
              <div className="grid grid-cols-1 md:grid-cols-5 items-center justify-center">
                <div className="col-span-3 flex flex-col gap-3 w-96">
                  <Subtitle label="Digital Education" />

                  <Heading
                    title="Improve Your Soft Skills"
                    subtitle="To make learning more engaging, we incorporate a variety of
                  multimedia resources such as videos" white
                  />
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
                <div className="col-span-2 hidden md:block">
                  <img src={bgImage2} alt="" />
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="max-w-6xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
              <div className="grid grid-cols-1 md:grid-cols-5 items-center justify-center">
                <div className="col-span-3 flex flex-col gap-3 w-96">
                  <Subtitle label="Digital Education" />

                  <Heading
                    title="Improve Your Technical Skills"
                    subtitle="To make learning more engaging, we incorporate a variety of
                  multimedia resources such as videos," white
                  />
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
                <div className="col-span-2 hidden md:block">
                  <img src={bgImage3} alt="" />
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;