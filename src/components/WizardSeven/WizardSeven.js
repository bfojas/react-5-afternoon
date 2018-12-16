import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateCredit} from  '../../ducks/reducer'

class WizardSeven extends Component {

    render(){
        const {updateCredit} = this.props
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>Estimate your credit score</p> <br />
                    
                    <div className="row">
                        <Link to="/wEight"><button onClick={()=>updateCredit('E')}>Excellent</button></Link>
                        <Link to="/wEight"><button onClick={()=>updateCredit('G')}>Good</button></Link>
                        <Link to="/wEight"><button onClick={()=>updateCredit('F')}>Fair</button></Link>
                        <Link to="/wEight"><button onClick={()=>updateCredit('P')}>Poor</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        credit: state.credit
    }
}
const mapDispatchToProps ={
    updateCredit: updateCredit
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardSeven);