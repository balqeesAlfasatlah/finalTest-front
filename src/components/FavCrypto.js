import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Col,Button } from 'react-bootstrap'


class FavCrypto extends React.Component {
  render() {
    return (
     
      <>
       
         <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.item.strDrinkThumb} />
            <Card.Body>
              <Card.Title>{this.props.item.strDrink}</Card.Title>
              <Card.Text>
                {this.props.item.idDrink}
              </Card.Text>
              <Button onClick={()=>this.props.delete(this.props.idx)} variant="primary">Delete</Button>
              <Button onClick={()=>this.props.showModelForm(this.props.idx)} variant="primary">Update</Button>
            </Card.Body>
          </Card>
        </Col> 
      </>
    )
  }
}

export default FavCrypto;
