import InnerCard from "./InnerCard";
export default function ItemDetails(children) {
  let ans;
  let { title, item } = children;

  console.log(title);
  if (item.card === undefined) {
    var n = item.itemCards.length;

    for (var i = 0; i < n; i++) {
      ans = InnerCard(...item.itemCards);
    }
  } else {
    ans = InnerCard(item);
  }

  return <>{ans}</>;
}
