import { observer } from "mobx-react-lite";
import { useStore } from "../../app/store/store";

function Logo() {
  const { appCompanyStore } = useStore();
  const logo = { __html: appCompanyStore.company?.logo ?? "" };
  return (
    <>
      {logo ? (
        <div dangerouslySetInnerHTML={logo}></div>
      ) : (
        <img src={`/public/assets/react.svg`} alt="" />
      )}
    </>
  );
}

export default observer(Logo);
