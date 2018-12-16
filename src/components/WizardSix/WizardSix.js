import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {updateCost, updateDown} from '../../ducks/reducer'

class WizardSix extends Component {

    render(){
        const {updateCost, updateDown} =this.props
        return(
            <div className="parent-div">
                    <div className="vert-align">                    <p>What is the estimated purchase price?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" onChange={event=>updateCost(event.target.value)}/> <br />


                    <p>How much are you putting down as a down payment?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" onChange={event=>updateDown(event.target.value)}/>                    
                        
                    
                    <Link to="/wSeven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return {cost: state.cost,
    downPayment: state.downPayment
}}

const MapDispatchToProps ={
    updateCost: updateCost,
    updateDown:updateDown
}

export default connect(mapStateToProps,MapDispatchToProps)(WizardSix);