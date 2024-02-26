import { create } from "mobx-persist";

const hydrate = create({
  storage: sessionStorage,
  jsonify: true,
});
