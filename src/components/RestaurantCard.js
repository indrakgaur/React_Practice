import { CDN_URL } from "../utils/constants";

const RestuarnantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.info;

  return (
    <div className='res-card'>
      <img
        className='res-logo'
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestuarnantCard;
