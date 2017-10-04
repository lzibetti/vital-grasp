import React, { Component } from 'react';

class ResourceComponent extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.resource.resourceName}</h4>
                <h6>{`Print file: ${this.props.resource.pdfFile}`}</h6>
                <img src={this.props.resource.media} alt="OT images"/>
            </div>
        );
    }
}

export default ResourceComponent;