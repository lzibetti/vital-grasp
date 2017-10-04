import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar"
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Resources from "./routes/resources/Resources";
import Contacts from "./routes/contacts/Contacts";
import Management from "./routes/management/Management"
import Footer from "./routes/footer/Footer";

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/resources" component={Resources} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/management" component={Management} />
                    </Switch>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;