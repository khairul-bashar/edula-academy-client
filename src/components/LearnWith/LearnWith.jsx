import React from 'react';
import Container from '../shared/Container';
import Button from '../Button/Button';
import { cardData } from './cardInfo';
import InfoCard from './InfoCard';


const LearnWith = () => {
    return (
      <div className='py-10 md:py-28 bg-cover bg-center bg-no-repeat bg-[url("../src/assets/Images/bg_image.svg")]'>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-5 px-5 md:px-0">
            <div className='col-span-2'>
              <h3 className="text-3xl font-semibold w-1/2 text-white my-3">
                Why we learn with Edula
              </h3>
              <p className="text-white text-md mb-5">
                Our platform offers a wide range of interactive courses and
                resources covering essential digital skills. Whether you're
                looking to enhance your proficiency in programming, web
                development, graphic design, data analytics, digital marketing,
                or any other digital discipline, we have tailored courses to
                meet your needs
              </p>
              <Button label="Contact Us" small />
            </div>
            <div className='col-span-3 ms-0 md:ms-5'>
              <div className="pt-4 grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-3">
                {cardData.map((item) => (
                  <InfoCard
                    label={item.label}
                    description={item.description}
                    icon={item.icon}
                    key={item.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default LearnWith;