import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            setValue: 0
        }

    }
    componentDidMount() {
       // this.setState({ count: this.state.count + 1 })
    }
    handleStart=()=> {
        this.setState({ count: this.state.count + 1 })
    }
    StopCount=()=>{
        this.setState({ count: 0 })
    }
    componentDidUpdate() {

        if (this.state.count >= 1) {
            if (this.state.setValue == 0) {
                setTimeout(() => {
                    this.setState({ count: this.state.count + 1 })
                }, 1000)
            }
            else {
                setTimeout(() => {
                    this.setState({ count: this.state.count + this.state.setValue })
                })
            }
        }

    }

    render() {

        return (
            <div className="timer">
                <h1>Timer</h1>
                <input type="number" name="timerInput" value={this.state.setValue} />
                <button onClick={this.handleStart}>Start</button>
                <button onClick={this.StopCount}>Clear</button>
                <br />
                <br />
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}

export default Timer;

