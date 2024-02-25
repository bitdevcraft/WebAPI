import { Button, Flex, Input } from "antd";
import { AiOutlineKey, AiOutlineUser } from "react-icons/ai";

function LoginForm() {
  return (
    <div className="space-y-3 p-14 max-w-[600px] w-full">
      <div>
        <p className="text-xl font-bold">Log in to continue</p>
      </div>
      <div className="space-y-2 ">
        <div>
          <Input
            size="large"
            prefix={<AiOutlineUser size={20} />}
            allowClear
            placeholder="Email"
          />
        </div>
        <div>
          <Input.Password
            size="large"
            prefix={<AiOutlineKey size={17} />}
            allowClear
            placeholder="Password"
          />
        </div>
        <Button type="primary" className="w-full border bg-blue-400">
          Login
        </Button>
      </div>
      <Flex justify="space-between">
        <Button type="link" className="text-blue-700" href="/auth/register">
          Create an account
        </Button>
        <Button
          type="link"
          className="text-blue-700"
          href="/auth/forgot-password"
        >
          Can't log in?
        </Button>
      </Flex>
    </div>
  );
}

export default LoginForm;
