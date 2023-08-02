import '../Assets/css/FormRow.css';

const FormRow = ({ type, name, value, handleChange, labelText }) => {
    return (
      <div className='rowContainer'>
        <label htmlFor={name}>
          {labelText || name}
        </label>
  
        <input
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
        />
      </div>

    );
  };
  
  export default FormRow;