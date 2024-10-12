import { CDN_URL } from "../utils/constants";

const RestuarnantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.info;

  return (
    <div className='m-4 p-4 w-[250px] rounded-lg bg-orange-200 hover:bg-slate-200'>
      <img
        className='rounded-lg h-24 w-60'
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className='font-bold py-4 text-lg'>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestuarnantCard;
