import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {updateEmail,updateFirst,updateLast} from '../../ducks/reducer'
class WizardTen extends Component {
    render(){
        const{updateEmail,updateFirst,updateLast} = this.props
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your name?</p> <br />

                    <input type="text" placeholder="First Name" onChange={event=>updateFirst(event.target.value)}/>
                    <input type="text" placeholder="Last Name" onChange= {event=>updateLast(event.target.value)}/>
                    <input type="text" placeholder="email" onChange={event=>updateEmail(event.target.value)}/>
                    
                    <Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        firstName: state.firstName,
        lasName: state.lastName,
        email: state.email
    }
}
const mapDispatchToProps = {
    updateEmail: updateEmail,
    updateFirst: updateFirst,
    updateLast: updateLast
}
export default connect(mapStateToProps, mapDispatchToProps)(WizardTen);