import React, { Component } from 'react'
import { Card,Col,Button } from 'react-bootstrap'

export class DrinkCards extends Component {
    render() {
        return (
            <>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.item.strDrinkThumb}/>
                        <Card.Body>
                            <Card.Title>{this.props.item.strDrink}</Card.Title>
                            <Card.Text>
                            {this.props.item.idDrink}
                            </Card.Text>
                            <Button onClick={()=>this.props.addDrink(this.props.item)} variant="primary">Add to fav</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
}

export default DrinkCards
