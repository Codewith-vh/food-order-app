export default function Coupons(menu) {
  menu = menu?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;

  return (
    <div className="coupon">
      {menu.map((coupon, index) => (
        <span
          className="coupon-code"
          key={index}
          style={{ color: coupon.info.offerTagColor }}
        >
          {coupon.info.header}
          <br />
          {coupon.info.couponCode + " | " + coupon.info.description}
        </span>
      ))}
    </div>
  );
}
