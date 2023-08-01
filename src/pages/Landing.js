// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import main from '../Assets/images/main.svg'
import '../Assets/css/Landing.css'
const Landing = () => {
  toast.success('Welcome Again', {
    position: toast.POSITION.TOP_CENTER
});
  return (
    <div className="container">
        <h1 > User <span>Portal</span> app</h1>
        <div>
        <img src={main} alt='User Portal' className='main-img' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
           sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        
        
         <button><Link to='/register'>Login/Register</Link></button>
        
      </div>

  )
}

export default Landing;