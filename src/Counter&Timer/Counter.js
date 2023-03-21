import PropTypes from 'prop-types';
import React from "react";
import { Link } from 'react-router-dom';

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
           setValue:0,
           inputClear:0
        };
    }

    increament=()=>{
        if(this.state.setValue==0){
            this.setState({
                count: Number(this.state.count) + 1
                });
        }
        else{
            this.setState({
                count: Number(this.state.count) + Number(this.state.setValue)
            })
        }
        
    }

    decreament=()=>{
        if(this.state.setValue==0){
            this.setState({
                count: this.state.count - 1
            })
        }
        else{
            this.setState({
                count: Number(this.state.count) - Number(this.state.setValue)
            })
        }
       
    }
    handleInput=(e)=>{
        // if(this.state.inputClear==0){
            this.setState({
                setValue:e.target.value
            })
        //}
    //    else{
    //     e.target.value=0
    //    }

    }
    clear =()=>{
        this.setState({
            count: 0,
            // setValue:0,
            // inputClear:0
        })
    }
    render(){

        return(
            <>
            
            <div style={{marginLeft:"35%",border:"3px solid green",marginRight:"40%",marginTop:"10%"}}>
                <div style={{padding:"10%"}}>

               
                <h1>Counter</h1>
                <input type="number" name="timerInput" onChange={this.handleInput} /><br/>
                <button onClick={this.decreament} style={{backgroundColor:"grey"}}>Decreament</button><h3>{this.state.count}</h3><button onClick={this.increament} style={{backgroundColor:"green"}}>Increament</button>
                <button onClick={this.clear}>Clear</button>
                </div>
                <Link to="/timer">Timer</Link><br/>
                <Link to="/">Home</Link>
            </div>

            <div>
               

            </div>
           
            </>
        )
    }
}

export default Counter



// export class PropsValid extends React.Component{
//     render(){
//         return(<>
//             <h3>{this.props.name}</h3>
//             <h3>{this.props.age}</h3>
//             <h3>{this.props.department}</h3>
//             </>
//         )
//     }
// }

// PropsValid.PropTypes={
//     name:PropTypes.string.isRequired,
//     age:PropTypes.number.isRequired,
//     department:PropTypes.string.isRequired
// }

// PropsValid.defaultProps={
//     name:"hari",
//     age:30,
//     department:"IT"
// }

// export default PropsValid;