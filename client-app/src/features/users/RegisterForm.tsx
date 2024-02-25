import { Button, Flex, Input } from "antd";
import { Brand } from "../company";

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
