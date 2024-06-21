import { useEffect, useState } from "react";
import { RES_URL } from "./constants";

const useRestaurantInfo = (id) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL + id);
    const json = await data.json();
    setresInfo(json);
  };
  return resInfo;
};

export default useRestaurantInfo;
