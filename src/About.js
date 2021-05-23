import React from 'react';
class About extends React.Component {


    constructor(){
        super();
        this.state = {
            name: 'arvind',
            age: '31'
        }
    }
    componentDidMount(){
        //console.log(this.props.data);
    }
    componentDidUpdate(){
        console.log("componentdidUpdate");
    }
    render(){
        return (
            <>
                <h1>About Us Component</h1>
                <h3>{this.state.age}</h3>
                <h3>{this.state.name}</h3>
                <h3>{this.props.data.name}</h3>
                <h3>{this.props.data.age}</h3>
                <button onClick={()=>{this.setState({name:'Rahul',age:30})}}>Update state</button>
            </>
        );
    }
}

export default About;