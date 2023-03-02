import { useNavigate } from "react-router-dom";
function Contact() {
    const navigate = useNavigate();
    return (<><h1>this is contact component </h1> <button onClick={()=>navigate('/home')}> Go Home</button> </>);
}

export default Contact;