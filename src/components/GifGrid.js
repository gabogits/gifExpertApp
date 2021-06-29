import React from "react";

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { images, loading } = useFetchGifs(category);
  /*
  useEffect(() => {
    getGifs(category).then((imgs) => setImages(imgs));
    //al pasar a getgifs al componente se convierte en un apromesa y de este lado se ocupa un then
    //SE PUEDE RESUMIR A ESTO  getGifs(category).then( setImages));
  }, [category]);
*/
  return (
    <div className="card-grid">
      <h3 className="animate__animated animate__fadeIn"> {category} </h3>

      {images.map((img) => (
        <GifGridItem key={img.id} {...img} />
      ))}

      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <div className="card-grid"></div>
    </div>
  );
};
