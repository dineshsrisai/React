import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-img"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export const withPromotedLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <ResCard {...props} />
      </div>
    );
  };
};
// spread operator it will pass all the properties;
export default ResCard;
