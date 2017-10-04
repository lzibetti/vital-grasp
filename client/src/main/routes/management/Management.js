import React, { Component } from 'react';
import { Link, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../redux/actions"
import ManageResourceContainer from "./ManageResourceContainer"

class Management extends Component {
    componentDidMount() {
        this.props.getResources();
    }
    genLinks = () => {
        return this.props.resources.map((resource, index) => {
            return <li key={index} resource={resource}><Link to={`/resources/${index}`}>{resource.resourceName}</Link></li>
        })
    }
    render() {
        return (
            <div className="resources-wrapper">
                <h2>Manage Resources</h2>
                <ul>
                    {this.genLinks()}
                </ul>
                <hr />
                <Switch>
                <Route path="/management/:index" component={ManageResourceContainer} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators)(Management);
