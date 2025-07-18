import Food from "@/components/Food";
import React from "react";

const Lorem = async () => {
  const data = await fetch("https://dummyjson.com/recipes", {cache: "force-cache"});
  const recipes = await data.json();
  

  return <div><Food data={recipes}/></div>;
};

export default Lorem;
