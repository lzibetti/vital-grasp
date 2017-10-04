import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../../../redux/actions"
import ManageResourceComponent from "./ManageResourceComponent"

class ManageResourceContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
            inputs: {
                resourceName: props.resources.resourceName,
                pdfFile: props.resources.pdfFile,
                media: props.resources.media
            }
        }
    }
    handleToggle = () => {
        this.setState((prevState) => {
            return {
            ...prevState,
            toggled: !prevState.toggled             
            }
        })
    }
    handleInput = (e) => {
        e.persist();
        this.setState((prevState) => {
            return {
                ...prevState,
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.type.value
                }
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editResources(this.state.inputs, this.props.index);
    }    
render() {
        return (
            <div>
                <ManageResourceComponent resource = {this.props.resources[this.props.match.params.index]}/>
                inputs={this.state.inputs}
                toggled={this.state.toggled}
                handleToggle={this.handleToggle}
                handleInput={this.handleInput}
                handleSubmit={this.handleSubmit}
                item={this.props.item} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
    }

export default connect(mapStateToProps, actionCreators)(ManageResourceContainer);
                // deleteResources={this.props.deleteItem}
