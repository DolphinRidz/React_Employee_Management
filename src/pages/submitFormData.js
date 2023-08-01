import { useSelector } from 'react-redux';

const SubmittedData = () => {
  // Get the form data from the Redux store
  const formData = useSelector((state) => state.form);

  return (
    <div>
      <h1>Submitted Form Data</h1>
      <div>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Selected Option:</strong> {formData.selectedOption}</p>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
};

export default SubmittedData;