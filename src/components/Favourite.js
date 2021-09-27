import React, { Component } from 'react'
import FavCrypto from './FavCrypto'
import { Row } from 'react-bootstrap'
import axios from 'axios'
import ModelForm from './ModelForm'
import { withAuth0 } from '@auth0/auth0-react';


export class Favourite extends Component {
    constructor(props) {
        super(props)

        this.state = {
            favData :[],
            show: false,
            index : 0 ,
            showModel : false
        }
    }

    componentDidMount = () => {
        if(this.props.auth0.isAuthenticated){
        let url2 = `${process.env.REACT_APP_SERVER}/getData/${this.props.auth0.user.email}`
        axios.get(url2).then(element => {
            console.log(element);
            this.setState({
                favData: element.data,
                show: true
            })
        })
    }
}

    delete=(index)=>{
        let id = this.state.favData[index]._id;
        axios.delete(`${process.env.REACT_APP_SERVER}/deleteDrink/${id}`).then(item=>{
            this.setState({
                favData: item.data,
                show: true
            })
        })
    }

    showModelForm=(index)=>{
        this.setState({
            strDrinkThumb : this.state.favData[index].strDrinkThumb,
            strDrink : this.state.favData[index].strDrink,
            idDrink : this.state.favData[index].idDrink,
            index : index ,
            showModel : true
        })
    }

    handleClose=()=>{
        this.setState({
            showModel :false
        })
    }

    update=(e)=>{
        e.preventDefault();
        let id = this.state.favData[this.state.index]._id;

        let data = {
            strDrinkThumb : e.target.strDrinkThumb.value ,
            strDrink : e.target.strDrink.value ,
            idDrink : e.target.idDrink.value ,
        }

        axios.put(`${process.env.REACT_APP_SERVER}/${id}` ,data).then(item=>{
            this.setState({
                favData: item.data,
                
            })
        })
        
    }
    render() {
        return (
            <>
                <Row style={{ gap: '60px', marginTop: '60px' }}>
                    {this.state.show && this.state.favData.map((item, idx) => {
                        return (
                            <FavCrypto item={item} idx={idx} delete={this.delete} showModelForm={this.showModelForm} />
                        )
                    })}

                    <ModelForm showModel={this.state.showModel} handleClose={this.handleClose} strDrinkThumb={this.state.strDrinkThumb}
                    strDrink={this.state.strDrink} idDrink={this.state.idDrink} update={this.update}
                     />
                </Row>
            </>
        )
    }
}

export default withAuth0(Favourite)
