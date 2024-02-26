import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import { useStore } from "../store/store";
import { useEffect } from "react";
import LoadingApp from "./LoadingApp";
import { observer } from "mobx-react-lite";

function App() {
  const { appCompanyStore } = useStore();

  useEffect(() => {
    appCompanyStore.getCompanyDetail().then(() => {
      appCompanyStore.setCompanyLoaded();
    });
  }, [appCompanyStore]);

  if (!appCompanyStore.companyLoaded) return <LoadingApp />;

  return (
    <div className="min-h-[100vh] relative">
      <div className="max-w-[1280px] mx-auto">
        <Outlet />
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default observer(App);
