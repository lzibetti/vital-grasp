import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <div>
                <img src="https://www.centrahealth.com/sites/default/files/styles/banner/public/banners/ot.png?itok=f2xB8dNq" alt="Finally home" />
                </div>  
                <div>
                    <div>
                 <img src={require("../../../image-files/distort.jpg")} alt="distorted"/>
                    </div> 
                    <div>
                 <img src={require("../../../image-files/pencil-grip1.jpg")} alt="pencil grip"/>
                   </div>
               </div>
            </div>
        );
    }
}

export default Home;