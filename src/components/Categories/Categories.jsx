import React from "react";
import { useSearchParams } from "react-router-dom";
import { categories } from "./catagoriesData";
import Container from "../shared/Container";
import CategoriesBtn from "./CategoriesBtn";
const Categories = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  return (
    <Container>
      <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-3 items-center justify-between overflow-x-auto w-fit mx-auto">
        {categories.map((item) => (
          <CategoriesBtn
            label={item.label}
            key={item.id}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
