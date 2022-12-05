import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGifts";

export const useFetchGifs = (category) => {
  const [imagenes, setimagenes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const images = await getGift(category);
    setimagenes(images);
    setIsLoading(false);
  };
  useEffect(() => {
    getImages();
  }, []);

  return {
    imagenes: imagenes,
    isLoading,
  };
};
