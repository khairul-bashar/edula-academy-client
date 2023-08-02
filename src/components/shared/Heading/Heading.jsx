const Heading = ({ title, subtitle, center , white, primary}) => {
  return (
    <div
      className={`
      ${center ? "text-center" : "text-start"}
      ${white ? "text-white" : "text-black"}
      ${primary ? "text-primary" : "text-black"}
      `}
    >
      <div className="text-4xl  font-bold my-5">{title}</div>
      <div className="font-light  my-5 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
