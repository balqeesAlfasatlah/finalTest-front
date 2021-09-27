import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DrinkCards from './DrinkCards';
import { Row } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';


class Home extends React.Component {
constructor(props) {
  super(props)

  this.state = {
     drinkData :[],
     show : false
  }
}

componentDidMount=()=>{
  let url2 ='http://localhost:4009/getDrink'
  axios.get(url2).then(item=>{
    this.setState({
      drinkData : item.data,
     show : true
    })
  })
}


addDrink=(data)=>{
  let newData={
     email : this.props.auth0.user.email,
     strDrinkThumb : data.strDrinkThumb ,
     strDrink : data.strDrink ,
     idDrink : data.idDrink ,

  }
  axios.post('http://localhost:4009/addDrink',newData)
}


  render() {
    return (
      <>
      <Row style={{gap : '60px' , marginTop:'60px'}}>
        {this.state.show && this.state.drinkData.map((item,idx)=>{
          return(
            <DrinkCards item={item} addDrink={this.addDrink} />
          )
        })}
        </Row>
      </>
    )
  }
}

export default withAuth0(Home);
