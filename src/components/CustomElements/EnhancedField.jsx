import { Field } from "formik";

const EnhancedField = (props) => {

  let className = "";
  if (props.type == "text" || props.type == "password")
    className += "border border-sky-500 rounded-md px-1";
  return (
    <>
      <td >
        <label className="font-bold" htmlFor={props.name}>{props.children}: </label>
      </td>
      <td className="text-start">
        <Field className={className} id={props.id} name={props.name} type={props.type} />
       
      </td>
    </>
  );
};

export default EnhancedField;
