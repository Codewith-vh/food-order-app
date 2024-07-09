import { useEffect, useState } from "react";
import Coupons from "./Coupons";
import MenuManager from "./MenuManager";
import MenuHeader from "./MenuHeader";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { menuPageApi } from "../utils/constants";
export default function RestoMenu() {
  const [menu, setMenu] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  const { resId } = useParams();
  const fetchData = async () => {
    const data = await fetch(
      menuPageApi + resId + "&catalog_qa=undefined&submitAction=ENTER",
    );

    const json = await data.json();
    setMenu(json?.data);
  };
  if (menu === undefined) {
    return <Shimmer />;
  }

  return (
    <div>
      <MenuHeader {...menu} />
      <Coupons {...menu} />
      <MenuManager {...menu} />
    </div>
  );
}
