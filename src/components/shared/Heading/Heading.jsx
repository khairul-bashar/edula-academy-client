const Heading = ({ title, subtitle, center , white}) => {
  return (
    <div
      className={`
      ${center ? "text-center" : "text-start"}
      ${white ? "text-white" : "text-black"}
      `}
    >
      <div className="text-4xl  font-bold my-5">{title}</div>
      <div className="font-light  my-5 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
