import { Card } from "react-bootstrap";
export default function RestroCard(resto) {
  const name = resto.resto.name;
  const cuisines = resto.resto.cuisines;
  const star = resto.resto.avgRating;
  const time = resto.resto.sla.deliveryTime;
  const image = resto.resto.cloudinaryImageId;
  return (
    <Card className="food-card" style={{ width: "10rem", height: "25rem" }}>
      <Card.Img
        className="food-card-img"
        variant="top"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          image
        }
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-in-card">
          {cuisines.slice(0, 4).join(" ")}
        </Card.Text>
        <Card.Text>{star + "🌟"}</Card.Text>
        <Card.Text>{time + " mins"}</Card.Text>
      </Card.Body>
    </Card>
  );
}
