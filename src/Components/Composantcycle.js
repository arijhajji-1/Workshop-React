import { Component } from "react";
import Button from 'react-bootstrap/Button';
class Composantcycle extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }

    increment=()=>{
      this.setState({
        count: this.state.count+1,
      })
    }

    decrement=()=>{
    this.setState({
        count: this.state.count-1,
    })

    }

    componentDidMount(){
        document.title=`Count: ${this.state.count}`;
        console.log('The component has mounted');
    }

    componentDidUpdate(){
        document.title=`Count: ${this.state.count}`;
        console.log('The component has updated');
    }
   
    componentWillUnmount(){
        document.title='';
        console.log('the component will unmount')
    }
    render() { 
        return ( <>
        <p>{this.state.count}</p>
        <Button variant="primary" onClick={this.increment}>Incrémenter</Button>
        <Button variant="primary" onClick={this.decrement}>Décrementer</Button>
        
        </> );
    }
}


export default Composantcycle;