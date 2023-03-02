import { Component } from "react";
import Button from 'react-bootstrap/Button';
class ComponentClass extends Component {
    state = { monText: "Hello 4Twin8",
    valeur:0 
} 
handleClick = () =>
{
    this.setState({valeur:this.state.valeur+1})
}

    render() { 
        return (<>Ceci est un composant de classe <div>{this.state.monText}</div>
        <input type="button" onClick={()=>this.handleClick()} value="Incrementer"/> 
        <Button variant="primary" onClick={()=>this.handleClick()} >Incrementer</Button>
        <h2>{this.state.valeur}</h2>
      

        
        
        
        </>);
    }
}
 
export default ComponentClass;