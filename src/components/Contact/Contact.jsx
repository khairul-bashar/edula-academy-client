import React from "react";
import aboutImg from "../../assets/Images/about_us.png";
import Button from "../Button/Button";
import Container from "../shared/Container";
import Subtitle from "../shared/Heading/Subtitle";
const Contact = () => {
  return (
    <div className='bg-cover object-fill bg-center bg-no-repeat bg-[url("../src/assets/Images/contact_bg.jpg")] h-full'>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-x-14">
          <img src={aboutImg} className="object-cover col-span-2 hidden md:block" alt="" />
          <div className="col-span-3 p-10 md:py-0">
            <Subtitle label="Contact Us"/>
            <h3 className="text-3xl font-semibold w-2/3 text-slate-800 my-3">Learn from landing and trusteed companies</h3>
            <p className="text-slate-500 text-sm mb-5">
              Our platform offers a wide range of interactive courses and
              resources covering essential digital skills. Whether you're
              looking to enhance your proficiency in programming, web
              development, graphic design, data analytics, digital marketing, or
              any other digital discipline, we have tailored courses to meet
              your needs
            </p>
            <Button label="Contact Us" small/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
