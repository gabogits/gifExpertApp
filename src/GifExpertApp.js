import React, { useState } from "react";

import { AddCategory } from "./AddCategory";
import { GifGrid } from "./components/GifGrid";

function GifExpertApp(props) {
  //const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["one punch"]);
  /*
  const handleAdd = () => {
    // setCategories(cats => [...cats, "Ranma 1/2"]); igual funciona
    setCategories([...categories, "Ranma 1/2"]);
  };
*/
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}

var menuMobileBtn = document.getElementById("menu-mobile-btn");
if (menuMobileBtn) {
  menuMobileBtn.onclick = function () {
    document.getElementById("menu-mobile-list").classList.add("active");
  };
}

export default GifExpertApp;
