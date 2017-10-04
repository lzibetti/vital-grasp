import React, { Component } from 'react';

class FormComponent extends Component {
    render() {
        return (
            <div className="row">
                <div className="contacts-wrapper col-lg-6 col-md-offset-1">
                    <h3>Contact us</h3>
                    <form onSubmit={this.props.handleSubmit} >
                        First name: <input value={this.props.inputs.fName} onChange={this.props.handleInputs} type="text" name="fName" placeholder="required" /><br />
                        Last name: <input value={this.props.inputs.lName} onChange={this.props.handleInputs} type="text" name="lName" placeholder="required" /><br />
                        Email: <input value={this.props.inputs.email} onChange={this.props.handleInputs} type="email" name="email" placeholder="required" /><br />
                        Notes: <br />
                        <textarea value={this.props.inputs.notes} onChange={this.props.handleInputs} name="notes" id="" cols="50" rows="10" placeholder="Ask a question or make a suggestion."></textarea><br/>
                        <button type="submit">Send</button>                        
                    </form>
                </div>
           </div>
        );
    }
}

export default FormComponent;