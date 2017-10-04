import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../../../redux/actions"
import ResourceComponent from "./ResourceComponent"

class ResourceContainer extends Component {
render() {
    return (
            <div>
                <ResourceComponent resource = {this.props.resources[this.props.match.params.index]}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
    }

export default connect(mapStateToProps, actionCreators)(ResourceContainer);
//render resource component, and pass down this.props.resources[this.props.index]
