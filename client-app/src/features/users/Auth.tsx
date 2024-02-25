import { Flex } from "antd";
import { Brand } from "../company";
import { Outlet } from "react-router-dom";

function AuthMain() {
  return (
    <>
      <Flex justify="center" className="pt-14">
        <Brand />
      </Flex>
      <Flex justify="center" className="w-full">
        <Outlet />
      </Flex>
    </>
  );
}

export default AuthMain;
