import { Link } from "react-router-dom";
import img from '../Assets/images/errorfound.svg';

const Error = () =>{
    return(
        <div>
        <img src={img} alt="Error In URL" />
        <h2>Error</h2>
        <h4>Please Try again</h4>
        <Link to='/'>
            <button>Home</button>
        </Link>
    </div>
    )
}
export default Error;