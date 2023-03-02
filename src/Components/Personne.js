import { Component } from "react";
class Personne extends Component {
    state = {  } 
    render() { 
        return (<>Ceci un composant Personne
                <h2>Nom: {this.props.nom}</h2>
                <h2>Prenom: {this.props.prenom}</h2>
        
        </>);
    }
}
Personne.defaultProps={
    nom: "Foulen",
    prenom: "Ben Foulen"
}
    

export default Personne;