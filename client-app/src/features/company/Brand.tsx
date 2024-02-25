import { Flex } from "antd";
import Logo from "./Logo";

function Brand() {
  return (
    <Flex align="center" gap={5} className="border">
      <Logo />
      <p className="font-bold text-lg">Vite</p>
    </Flex>
  );
}

export default Brand;
