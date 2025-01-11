import { Form, withFormik } from "formik";
import * as Yup from "yup";
import EnhancedField from "../CustomElements/EnhancedField";
import Button from "../CustomElements/Button";
import FieldError from "../CustomElements/FieldError";

const LoginForm = ({ touched, errors }) => {
  return (
    <Form className="bg-white p-6 rounded-sm shadow-md flex flex-col items-center justify-center">
      <h1 className='p-2 m-4 text-2xl font-bold w-[300px]'>Sign up</h1>
      <table>
        <tbody>
          <tr >
            <EnhancedField type="text" id="username" name="username">
              Username
            </EnhancedField>
          </tr>
          <tr className="h-8">
            <td></td>
            <FieldError touched={touched} errors={errors} fieldName={'username'}  />
          </tr>
          <tr>
            <EnhancedField
              type="password"
              id="password"
              name="password"
              error={
                touched.password && errors.password ? errors.password : null
              }
            >
              Password
            </EnhancedField>
          </tr>
          <tr className="h-8">
            <td></td>
            <FieldError touched={touched} errors={errors} fieldName={'password'} />
          </tr>
          <tr>
            <td colSpan={2} className="pt-6">
              <Button type="submit" color="primary">
                Submit
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </Form>
  );
};

const enhancedForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(3, "At least 3 characters are required"),
    password: Yup.string()
      // .min(8, "Password must be at least 8 characters long")
      // .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      // .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      // .matches(/\d/, "Password must contain at least one digit")
      // .matches(
      //   /[@$!%*?&]/,
      //   "Password must contain at least one special character"
      // )
      .required("Password is required"),
  }),
  handleSubmit: (values, formikBag) => {
    console.log(values);
    formikBag.props.handleSubmit(values,formikBag);
  },
})(LoginForm);

export default enhancedForm;
