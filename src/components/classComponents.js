import React from "react";

class FirstClassComponent extends React.Component{

    constructor(){
        super()
        this.state={name:"",flag:true}
    }

    componentDidMount(){
        console.log("mounted");
    }

    componentDidUpdate(){
        console.log("updated");
    }


    render(){
        var a="hello"
        return(
            <div>
                <h1>{a} This is first Class Component</h1>
                <button onClick={()=>{this.setState({flag:false})}}>update flag</button>
                {this.state.name}
                <input type="text" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}></input>
                {this.state.flag &&<SecondClassComponent a={a} name={this.state.name}/>}
            </div>
        )
    }
}

class SecondClassComponent extends React.Component{

    componentWillUnmount(){
            alert("this component is getting deleted")
    }
    render(){
        return(
            <div>
                <h1>{this.props.a} This is second class component {this.props.name}</h1>
            </div>
        )
    }
}


export default FirstClassComponent;