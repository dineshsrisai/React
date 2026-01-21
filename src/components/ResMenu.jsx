import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResMenu from "../utils/useResMenu";

const ResMenu = () => {
  const { resId } = useParams;

  const resInfo = useResMenu(resId);

  if (resInfo === null) return <Shimmer />;

  return (
    <div>
      <h1>Name</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};
export default ResMenu;
