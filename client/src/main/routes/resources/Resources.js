import React, { Component } from 'react';
import { Link, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../redux/actions"
import ResourceContainer from "./ResourceContainer"

class Resources extends Component {
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
                <h2>Resources</h2>
                <ul>
                    {this.genLinks()}
                </ul>
                <hr />
                <Switch>
                <Route path="/resources/:index" component={ResourceContainer} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators)(Resources);

// <Route path="/resources/:index" component={() => <ResourceContainer resources={this.props.resources}/> } />
// <Route path="/resources/:index" component={(ResourceContainer)} />
