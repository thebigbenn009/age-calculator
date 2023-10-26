import FormInput from "./FormInput";
import { useGlobalContext } from "../Context";

const FormContainer = () => {
  const { inputFields, error } = useGlobalContext();
  const { day, month, year } = error;
  return (
    <div className="form-container">
      <FormInput label="day" value={inputFields.day} error={day} />
      <FormInput label="month" value={inputFields.month} error={month} />
      <FormInput label="year" value={inputFields.year} error={year} />
    </div>
  );
};

export default FormContainer;
