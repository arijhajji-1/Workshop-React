import { useParams } from "react-router-dom";

function Accueil() {
    const {id} = useParams();
    return ( <h1>Hi {id}</h1> );
}

export default Accueil;