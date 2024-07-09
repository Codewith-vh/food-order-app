import InnerCard from "./InnerCard";
export default function ItemDetails(item) {
  console.log(item.card === undefined);
  let name;
  let price;
  let desc;
  let ans;
  let imgdesc;
  if (item.card === undefined) {
    var n = item.itemCards.length;
    for (var i = 0; i < n; i++) {
      ans = InnerCard(...item.itemCards);
      console.log();
    }
  } else {
    name = item.card.info.name;
    price = item.card.info.price / 100 || item.card.info.defaultPrice / 100;
    desc = item.card.info.description;
    imgdesc = item.card.info.imageId;
    ans = (
      <>
        <div className="itemContainer">
          <span className="desc-design">
            <h6>
              <b>{name}</b>
            </h6>
            <p>{price}</p>
            <p className="desc-item">{desc}</p>
          </span>
          <span className="item-img">
            <img
              className="img-design"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                imgdesc
              }
              alt="Next available at 7 pm, today"
            />
          </span>
        </div>
      </>
    );
  }

  return <>{ans}</>;
}
