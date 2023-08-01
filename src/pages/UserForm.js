import { useState, useEffect } from 'react';
import FormRow from '../components/FormRow';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/UserSlice';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/Register.css';
import './userform/userform.css';

const initialState = {
    name: '',
    email: '',
    password: '',
    country: '',
    experience: '',
    contact: '',
    about: '',
    isMember: true,
};

function UserForm() {
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
        // if (isMember) {
        //     dispatch(loginUser({ email: email, password: password }));
        //     return;
        //   }
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

            <h3>Job Registration Form</h3>
            {/* name field */}
        
                <FormRow
                    type='text'
                    name='name'
                    value={values.name}
                    handleChange={handleChange}
                />
        
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
            <FormRow
                type='text'
                name='country'
                value={values.country}
                handleChange={handleChange}
            />
            <FormRow
                type='number'
                name='experience'
                value={values.experience}
                handleChange={handleChange}
            />
             <FormRow
                type='text'
                name='contact'
                value={values.contact}
                handleChange={handleChange}
            />
             <FormRow
                type='text'
                name='about'
                value={values.about}
                handleChange={handleChange}
            />

            <button type='submit' className="btn btn-primary btn-block"> 
                 {isLoading ? 'loading...' : 'submit'}
            </button>

           
        </form>
        </div>

    );
}
export default UserForm;
