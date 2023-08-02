import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearStore } from '../../features/user/UserSlice';
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(clearStore("Logout Successfulli !"));    
};
  return (
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">
          <h2>Job Portal</h2>
          </a>
        </div>
        <ul class="nav navbar-nav">
          <li>
            <a href="/register">
              <div >
                <h4>Sign Up</h4>
                <p>
                  <b>as a Candidate</b>
                </p>
              </div>
            </a>
          </li>
          <li>
          <a href="/">
              <div >
                <h4>Sign Up</h4>
                <p>
                  <b>as a Recruitment Vendor</b>
                </p>
              </div>
            </a>
          </li>
          <li>
          {/* <a href="/signUpAsEmployer">
              <div >
                <h4>Sign Up</h4>
                <p>
                  <b>as an Employer</b>
                </p>
              </div>
            </a> */}
          </li>
          <li>
          <a href="/" onClick={() => logout ()}>
              <div >
                <h4>Log Out</h4>
                <p>
            
                </p>
              </div>
            </a>
          
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Header;
