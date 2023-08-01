import React from "react";
import qs from "query-string";

import { useNavigate, useSearchParams } from "react-router-dom";
const CategoriesBtn = ({ label, selected }) => {
  const [params, setParams] = useSearchParams();

  const navigate = useNavigate();
  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery = {
      ...currentQuery,
      category: label,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    navigate(url);
  };

  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        hover:bg-slate-200
        hover:text-neutral-500
        border-black
        transition
        cursor-pointer
        shadow-md
        ${
          selected
            ? "border-transparent bg-primary text-white"
            : "border-transparent text-neutral-500"
        }
     
      `}
    >
      <div className="text-md font-medium  py-3 px-5">{label}</div>
    </div>
  );
};

export default CategoriesBtn;
