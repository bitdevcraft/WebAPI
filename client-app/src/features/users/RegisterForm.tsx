import { Button, Flex, Input } from "antd";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .required()
      .matches(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid Email"),
    password: yup
      .string()
      .required("Password is Required")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Password must contain at least 8 characters, including one number, one lowercase and one uppercase letter"
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match"),
    firstName: yup.string(),
    lastName: yup.string(),
    username: yup.string(),
  })
  .required();

function RegisterForm() {
  return (
    <div className="space-y-3 p-14 max-w-[600px] w-full">
      <div>
        <p className="text-xl font-bold">Sign up to continue</p>
      </div>
      <div className="space-y-2 w-full">
        <div className="flex gap-2">
          <Input
            size="large"
            allowClear
            placeholder="First Name"
            className="w-full"
          />
          <Input
            size="large"
            allowClear
            placeholder="Last Name"
            className="w-full"
          />
        </div>

        <div>
          <Input size="large" allowClear placeholder="Username" />
        </div>
        <div>
          <Input size="large" allowClear placeholder="Email" />
        </div>
        <div>
          <Input.Password size="large" allowClear placeholder="Password" />
        </div>
        <div>
          <Input.Password
            size="large"
            allowClear
            placeholder="Re-Type Password"
          />
        </div>
      </div>
      <p className="text-xs text-gray-700">
        By signing up, I accept the Vite Terms of Service and acknowledge the
        Privacy Policy.
      </p>
      <Button type="primary" className="w-full border bg-blue-400">
        Sign up
      </Button>

      <Flex justify="center">
        <Button type="link" className="text-blue-700" href="/auth/login">
          Already have an account? Log in
        </Button>
      </Flex>
    </div>
  );
}

export default RegisterForm;
