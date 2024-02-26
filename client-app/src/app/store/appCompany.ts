import { makeAutoObservable, runInAction } from "mobx";
import { AppCompany } from "../models";
import agent from "../api/agent";
import { clearPersistedStore, makePersistable } from "mobx-persist-store";

export default class AppCompanyStore {
  company: AppCompany | null = null;
  loadingInitial = false;
  companyLoaded = false;

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: "_company",
      properties: ["companyLoaded", "company"],
      storage: window.sessionStorage,
    });
  }

  getCompanyDetail = async () => {
    this.setLoadingInitial(true);
    await clearPersistedStore(this);
    try {
      const result = await agent.AppCompanies.details();
      runInAction(() => {
        if (result) this.company = result;
      });

      this.setLoadingInitial(false);
    } catch (error) {
      console.error(error);
    }
  };

  setCompanyLoaded = () => {
    this.companyLoaded = true;
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };
}
