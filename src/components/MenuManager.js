import ItemDetails from "./ItemDetails";
export default function MenuManager(menu) {
  menu = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  let len = menu.length;

  let arr = [];
  for (var i = 2; i < len - 2; i++) {
    let menuItem = menu[i]?.card?.card;
    arr.push(menuItem);
  }
  console.log(arr);

  return (
    <div>
      {arr.map(
        (ele, index) => (
          { index },
          (
            <>
              <h4 className="category-heading">
                <b>{ele.title}</b>
              </h4>
              {ele.itemCards === undefined
                ? ele?.categories?.map((item, index) => (
                    <>
                      <ItemDetails key={index} title={ele.title} item={item} />
                    </>
                  ))
                : ele.itemCards.map((mainItemCard, index) => (
                    <>
                      <ItemDetails
                        key={index}
                        title={ele.title}
                        item={mainItemCard}
                      />
                    </>
                  ))}
              <p className="empty-block">
                <br />
              </p>
            </>
          )
        ),
      )}
    </div>
  );
}
