import { Card } from "react-bootstrap";
export default function ShimmerBody() {
  return (
    <Card
      className="shimmer-food-card"
      style={{ width: "14rem", height: "20rem" }}
    >
      <Card.Img className="shimmer-food-card-img" variant="top" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text></Card.Text>
        <Card.Text></Card.Text>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
}
