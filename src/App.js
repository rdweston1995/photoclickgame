import React, { Component } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import IMG from "./components/img";
import imgs from "./imgs.json";
import "./app.css";

class App extends Component {
    state = {
        imgs,
        score : 0,
        highScore: 0
    };

    testing = () => {
        console.log(this.state.imgs);
    }

    imgOnClick = (id) => {
        // if(this.val() === "clicked"){
        //     console.log("clicked previously");
        // }else{
        //     this.val("clicked");
        // }
        this.setState({score: this.state.score + 1});
        if(this.state.highScore < this.state.score){
            this.setState({highScore: this.state.score + 1});
            // this.setState({score: this.state.score + 1});
        }
        // }else{
        //     // this.setState({score: this.state.score + 1});
        // }
        console.log(this.state.score + " || " + this.state.highScore);
    }
    

    render() {
        return (
            <Router>
                <div>
                    <Navbar 
                    score={this.state.score}
                    highScore={this.state.highScore}
                    />
                    <Header />
                    <div className="container">
                        {this.state.imgs.map(img => (
                            <IMG 
                            id={img.id}
                            key={img.id}
                            name={img.name}
                            image={img.image}
                            imgOnClick={this.imgOnClick} 
                            />
                        ))}
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;