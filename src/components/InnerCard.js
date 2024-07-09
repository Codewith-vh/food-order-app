import { itemImg } from "../utils/constants";
export default function InnerCard(item) {
  let name = item.card.info.name;
  let price = item.card.info.price / 100 || item.card.info.defaultPrice / 100;
  let desc = item.card.info.description;
  let imgdesc = item.card.info.imageId;

  return (
    <>
      <div className="itemContainer">
        <span className="desc-design">
          <h6>
            <b>{name}</b>
          </h6>
          <p>{"₨ " + price}</p>
          <p className="desc-item">{desc}</p>
        </span>
        <span className="item-img">
          <img className="img-design" src={itemImg + imgdesc} />
        </span>
      </div>{" "}
    </>
  );
}
