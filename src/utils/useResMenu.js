import { useState, useEffect } from "react";

const useResMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    const data = await fetch(resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};
export default useResMenu;
