import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import {updateProp} from '../../ducks/reducer'

class WizardThree extends Component {
    render(){
        const {updateProp} = this.props
        return(
            <div className="parent-div">
                <div className="vert-align">
                   <p> What property are you looking to use the loan on? </p><br />
                    <div className="row">
                        <Link to="/wFour"><button value="primaryHome" onClick={event=>updateProp(event.target.value)}>Primary Home</button></Link>
                        <Link to="/wFour"><button value="rentalProperty" onClick={event=>updateProp(event.target.value)}>Rental Property</button></Link>
                        <Link to="/wFour"><button value="secondaryHome" onClick={event=>updateProp(event.target.value)}>Secondary Home</button></Link>
                    </div>
                </div>           
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        propToBeUsedOn: state.propToBeUsedOn
    }
}
const mapDispatchToProps ={
    updateProp : updateProp

}

export default connect(mapStateToProps,mapDispatchToProps) (WizardThree); 
