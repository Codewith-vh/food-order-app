export default function MenuHeader(menu) {
  console.log(menu);
  menu = menu?.cards[2]?.card?.card?.info;
  let name = menu.name;
  let cuisines = menu.cuisines;
  let time = menu.sla.deliveryTime;
  let areaName = menu.areaName;
  let avgRating = menu.avgRating;
  let totalRatingsString = menu.totalRatingsString;

  return (
    <div>
      <div className="menu-header-style">
        <span>
          <h2>{name}</h2>
          <p>
            {cuisines.join(" ")}-{time + " mins"}
          </p>
          <p>{areaName}</p>
        </span>
        <span className="rating-box">
          <p>{avgRating + "🌟"}</p>
          <p>{totalRatingsString}</p>
        </span>
      </div>
    </div>
  );
}
