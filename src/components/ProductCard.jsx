import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import CardImage from "../assets/images/Fisdy - Elegant Pink Solid Patchwork Drawstring Buckle Off-the-Shoulder Short Sleeve Two-Piece Set - Yellow, XL.jpeg"
import { NavLink } from 'react-router-dom';
function ProductCard({product}) {
  return (
    <Card>
      <Card.Img variant="top" src={product?.image} style={{width: "100%", height:"200px"}}/>
      <Card.Body>
      <Card.Title>{product?.title}</Card.Title>
        <Card.Text>{product?.desc}</Card.Text>
        <Card.Text>{product?.price}</Card.Text>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
        <a href="https://www.pinterest.com/pin/571394271584302075/"><Button variant="primary">Add to cart</Button></a>
        <Button className='ms-4' variant="danger">
        <NavLink to ={`/product/${product?.id}`} style={{textDecoration:"none", color:"white"}} >
            Detail
        </NavLink>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;