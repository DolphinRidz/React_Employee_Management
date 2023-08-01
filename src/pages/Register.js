import { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/UserSlice";
import { useNavigate } from "react-router-dom";
import "../pages/register/register.css";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}:${value}`);
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
      useEffect(() => {
        if (user) {
          setTimeout(() => {
            navigate('/signUpAsEmployer');
          }, 2000);
        }
      }, [user]);
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        {/* <button type='submit' className="member-btn">
                 {isLoading ? 'loading...' : 'submit'}
            </button> */}

        <div class="form-group row top-margin">
          <div class="col-sm-10">
            <button type="submit" className="btn btn-primary ">
              {isLoading ? "loading..." : "Submit"}
            </button>
          </div>
        </div>

        <div class="form-check mb-2 mr-sm-2">
          <label class="form-check-label" for="inlineFormCheck">
            {values.isMember ? "Not a member yet?" : "Already a member?"}
          </label>
          <button
            type="button"
            onClick={toggleMember}
            className="btn btn-primary "
          >
            {values.isMember ? "Register" : "Login"}
            </button>
        </div>


      </form>
    </div>
  );
}
export default Register;
