import "../Assets/css/custom.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { toast } from 'react-toastify';
import { useState } from "react";
import { submitForm} from '../features/formData/formSlice';
import { useDispatch } from "react-redux";
const UserForm = () => {
    
    const checkboxOptions = ['Full-Time', 'Work From Home', 'Hybrid'];
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState('');
    const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
    const handleCheckboxChange = (option) => {
        setSelectedOption(option);
    };

    const submitHandler=(e)=>{
        e.preventDefault();
        toast.success('Thank You', {
            position: toast.POSITION.TOP_CENTER
        });
        // Dispatch the form submission action with the form data
        dispatch(submitForm({ name, phone, selectedOption }));
        setName('');
        setPhone('');
        setSelectedOption('');
        // Reset form fields after submission

    };
    return (
        <form className="container padding-left-right padding-color" onSubmit={submitHandler}>
            <div className="form-group">
                <h2>Employer Details</h2>

                <input type="text" className="form-control" placeholder="Full Name" name="name"
                value={name} onChange={(e) => setName(e.target.value)} />
                <label>Is the above "Full Name" looking good? Ensure Correct Full Name </label>
                <input type="password" className="form-control" placeholder="Password"></input>
                <select className="form-control" name="country" required={true} id="country">
                    <option value="">Select Country</option>
                    <option value="United Kingdom (UK)">United Kingdom (UK)</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                    <option value="Other">Other</option>
                </select>
                <div className="flexArea">
                    <div>
                        <label>Total Years of Experience </label>
                        <select className="form-control" name="experience" required={true}>
                            <option value="">Years</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <div >
                        <label>In Months </label>
                        <select className="form-control" required={true}>
                            <option value="">Months</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>

                </div>
                <div>
                <table >
                    <thead>
                        <tdata><label>Contact Number </label></tdata>
                    </thead>
                    <thead className="flexArea">
                        <tdata ><input type="text" className="form-control" placeholder="+" /></tdata>
                        <tdata><input type="text" className="form-control" placeholder="Type Your Mobile Number" 
                        value={phone} onChange={(e) => setPhone(e.target.value)} /></tdata>
                    </thead>

                </table>
                </div>
               
                <div>
                <label>Why should we hire you?</label>
                <textarea rows="4" cols="80" className="form-control"
                    placeholder="Write a cover letter (max 300 words)"></textarea>
                </div>
                
                <div className="flexArea">
                    <ul>
                        <li className="list-style-type">
                            <label>
                                <input value="Permanent" type="checkbox" />Permanent
                            </label>
                        </li>
                        <li className="list-style-type">
                            <label>
                                <input value="Contract" type="checkbox" />Contract
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="rowArea">
                    <label>Preference (Select One ) : </label>
                    {checkboxOptions.map((option, index) => (
                        <label key={index}>
                            <input
                                type="checkbox"
                                checked={selectedOption === option}
                                onChange={() => handleCheckboxChange(option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
                <div className="rowArea">
                    <label className="container_check"> <input type="checkbox" name="terms" value="Yes" /> I agree with the Terms of Service and Privacy Policy.
                    </label>
                </div>

                <button type="submit" className="btn-custom">Submit</button>

            </div>
        </form>
    );
}

export default UserForm;

import { useState, useEffect } from 'react';
import FormRow from '../components/FormRow';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/UserSlice';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/Register.css';
const initialState = {
    name: '',
    email: '',
    password: '',
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
            toast.error('Please fill out all fields');
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
            navigate('/');
          }, 2000);
        }
      }, [user]);
    return (
<div className="container">

        <form onSubmit={onSubmit}>

            <h3>{values.isMember ? 'Login' : 'Register'}</h3>
            {/* name field */}
            {!values.isMember && (
                <FormRow
                    type='text'
                    name='name'
                    value={values.name}
                    handleChange={handleChange}
                />
            )}
            {/* email field */}
            <FormRow
                type='email'
                name='email'
                value={values.email}
                handleChange={handleChange}
            />
            {/* password field */}
            <FormRow
                type='password'
                name='password'
                value={values.password}
                handleChange={handleChange}
            />
            <button type='submit' className="btn">
                 {isLoading ? 'loading...' : 'submit'}
            </button>

            <p>
                {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                <button type='button' onClick={toggleMember} className="member-btn">
                    {values.isMember ? 'Register' : 'Login'}
                </button>
            </p>
        </form>
        </div>

    );
}
export default Register;
