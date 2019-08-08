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
        highScore: 0,
        ClickedArray: []
    };

    imgOnClick = (id) => {
        // if(this.val() === "clicked"){
        //     console.log("clicked previously");
        // }else{
        //     this.val("clicked");
        // }
        // console.log("test");
        // console.log($(this).val());
        const shuffleArr = this.shuffleArray(imgs);
        this.setState({imgs: shuffleArr});
        console.log(this.state.ClickedArray);
        if(this.state.ClickedArray.includes(id)){
            this.setState({
                score: 0,
                ClickedArray: []
            });
        } else {
            this.setState({
                score: this.state.score + 1,
                ClickedArray: this.state.ClickedArray.concat([id])
            });
        }
        if(this.state.score > this.state.highScore){
            this.setState({highScore: this.state.score});
        }
    }

    shuffleArray = (arr) => {
        for(let i = arr.length - 1; i > 0; i--){
            const rand = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[rand]] = [arr[rand], arr[i]];
        }

        return arr;
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
                    <div className="row">
                        <div className="col-12 container">
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
                </div>
            </Router>
        );
    }
}

export default App;