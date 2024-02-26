import { createContext, useContext } from "react";
import AppCompanyStore from "./appCompany";

interface Store {
  appCompanyStore: AppCompanyStore;
}
export const store: Store = {
  appCompanyStore: new AppCompanyStore(),
};
export const StoreContext = createContext(store);
export function useStore() {
  return useContext(StoreContext);
}
