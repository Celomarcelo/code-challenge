import React from "react";
import css from './css/NavBarSimple.module.css';


class SimpleNavbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            message: "Hi",
            buttonText: "Enter",
          
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State:", prevState);
            console.log("Previous Props:", prevProps);
            return {
                message:
                    prevState.message === "Hi" ? "Welcome back" : "Hi",
                buttonText: prevState.buttonText === "Enter" ? "Exit" : "Enter",
            };
        });
    }

    render() {
        return <div className = {css.NavBar}>
            <h1>My Galery</h1>
            <div>
            <span>{this.state.message}, {this.props.name}</span>
            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        </div>
    }

}
export default SimpleNavbar;
