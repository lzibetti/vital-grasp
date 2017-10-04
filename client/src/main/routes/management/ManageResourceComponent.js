import React, { Component } from 'react';

class ManageResourceComponent extends Component {
    render() {
        {console.log(this.props)}
        return (
            <div>
                <h4>{this.props.resource.resourceName}</h4>
                <h6>{this.props.resource.pdfFile}</h6>
                <img src={this.props.resource.media} alt="OT images"/>
                <button onClick={() => { this.props.deleteItem(this.props.index) }}>Delete this resource</button>
                <button onClick={this.props.handleToggle}>Edit</button>
                <br/>
                <div className={this.props.toggled ? "show" : "hide"}>
                    <form onSubmit={this.props.handleSubmit}>
                        <input value={this.props.inputs.name} onChange={this.props.handleInput} name="name" type="text" placeholder="Edit Name" />
                        <input value={this.props.inputs.price} onChange={this.props.handleInput} name="price" type="text" placeholder="Edit Price" />
                        <br />
                        <input checked={this.props.inputs.fierce} onChange={this.props.handleInput} name="fierce" type="checkbox" placeholder="Checkmark" />
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ManageResourceComponent;
