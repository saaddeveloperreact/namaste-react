/* Restaurant Card Component */
const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="restaurant"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${resData?.info?.cloudinaryImageId}`}
      />

      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating} ⭐</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};

/* Restaurant Data */
const resObj = [
  {
    info: {
      id: "10583",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/5c5effc9-fae6-447d-850a-39f269c93084_10583.JPG",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      costForTwo: "₹350 for two",
      sla: { slaString: "40-45 mins" },
    },
  },
  {
    info: {
      id: "588619",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/f65192f5-bbd0-4649-9752-b59d6178a065_588619.JPG",
      cuisines: ["Burgers", "Fast Food"],
      avgRating: 4.3,
      costForTwo: "₹400 for two",
      sla: { slaString: "35-40 mins" },
    },
  },
  {
    info: {
      id: "356343",
      name: "Belgian Waffle",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/33951293-7a8d-44da-93be-5935133098bc_356343.jpg",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.5,
      costForTwo: "₹200 for two",
      sla: { slaString: "35-45 mins" },
    },
  },
  {
    info: {
      id: "681612",
      name: "LeanCrust Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/14414940-565f-4b31-8880-eb44478a5ec0_681612.jpg",
      cuisines: ["Pizza", "Italian"],
      avgRating: 4.7,
      costForTwo: "₹300 for two",
      sla: { slaString: "20-30 mins" },
    },
  },
  {
    info: {
      id: "41095",
      name: "Nandhini Deluxe",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/3/5c59424c-bad5-4539-8575-729df00bc3f2_41095.jpg",
      cuisines: ["Biryani", "South Indian"],
      avgRating: 4.3,
      costForTwo: "₹550 for two",
      sla: { slaString: "30-35 mins" },
    },
  },
  {
    info: {
      id: "69876",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/f4848952-184f-414f-bbe3-7a39faeddec9_69876.jpg",
      cuisines: ["Sandwich", "Salads"],
      avgRating: 4.5,
      costForTwo: "₹350 for two",
      sla: { slaString: "20-25 mins" },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="res-container">
        {resObj.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
