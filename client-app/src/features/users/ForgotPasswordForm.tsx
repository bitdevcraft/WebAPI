import { Button, Flex, Input } from "antd";
import { AiOutlineUser } from "react-icons/ai";

function ForgotPasswordForm() {
  return (
    <div className="space-y-3 p-14 max-w-[600px] w-full">
      <div>
        <p className="text-xl font-bold text-gray-900">Can't log in?</p>
      </div>
      <div className="space-y-1">
        <p className="text-xs font-semibold text-gray-500">
          We'll send a recovery link to
        </p>
        <div>
          <Input
            size="large"
            prefix={<AiOutlineUser size={20} />}
            allowClear
            placeholder="Enter Email"
          />
        </div>
      </div>
      <Button type="primary" className="w-full border bg-blue-400">
        Send recovery link
      </Button>
      <Flex justify="center">
        <Button type="link" className="text-blue-400" href="/auth/login">
          Return to log in
        </Button>
      </Flex>
    </div>
  );
}

export default ForgotPasswordForm;
