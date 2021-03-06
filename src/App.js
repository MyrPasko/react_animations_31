import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

import Transition from "react-transition-group/Transition";

class App extends Component {
    state = {
        modalIsOpen: false,
        showBlock: false
    };

    showModal = () => {
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    render() {
        return (
            <div className="App">
                <h1>React Animations</h1>
                <button onClick={() => this.setState(prevState => ({ showBlock: !prevState.showBlock }))}>
                    Toggle
                </button>
                <br />
                {/* {this.state.showBlock ? (
                    <div style={{ backgroundColor: "red", width: "100px", height: "100px", margin: "auto"}} />
                ) : null} */}

                <Transition 
                in={this.state.showBlock} 
                timeout={300} 
                mountOnEnter unmountOnExit
                onEnter={() => console.log('OnEnter works!')}
                onEntering={() => console.log('OnEntering works!')}
                onEntered={() => console.log('OnEntered works!')}
                onExit={() => console.log('OnExit works!')}
                onExiting={() => console.log('OnExiting works!')}
                onExited={() => console.log('OnExited works!')}
                >
                    {state => (
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 100,
                                height: 100,
                                margin: "auto",
                                transition: "opacity 1s ease-out",
                                opacity: state === "exiting" ? 0 : 1
                            }}
                        />
                    )}
                </Transition>
                <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
                {/* <Transition in={this.state.modalIsOpen} timeout={300} mountOnEnter unmountOnExit>
                    {state => <Modal show={state} closed={this.closeModal} />}
                </Transition> */}
                {/* {this.state.modalIsOpen ? <Modal show={this.state.modalIsOpen} closed={this.closeModal} /> : null} */}
                {this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen} closed={this.closeModal} /> : null}
                {/* <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
                <Backdrop show={this.state.modalIsOpen} closed={this.closeModal} /> */}
                <button className="Button" onClick={this.showModal}>
                    Open Modal
                </button>
                <h3>Animating Lists</h3>
                <List />
            </div>
        );
    }
}

export default App;
