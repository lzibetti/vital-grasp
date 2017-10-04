import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../../../redux/actions/index";
import ContactsComponent from "./ContactsComponent";

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                fName: "",
                lName: "",
                email: "",
                notes: ""
            }
        }
        this.handleInputs = this.handleInputs.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }
    handleInputs(e){
        e.persist();
     this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.postContacts(this.state.inputs);
        this.clearInputs();
    }
    clearInputs() {
        this.setState({
            inputs: {
                fName: "",
                lName: "",
                email: "",
                notes: ""
            }
        })
    }
    render() {
        return (
            <div>
                <ContactsComponent
                postContacts={this.props.postContacts}
                handleInputs={this.handleInputs}
                handleSubmit={this.handleSubmit}
                inputs={this.state.inputs}                  />
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return state;
}
export default connect(mapStateToProps, actionCreators)(Contacts);