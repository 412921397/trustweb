import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createPinia } from "pinia";

import useSystem from "./modules/system.js";
import useUser from "./modules/user.js";

const store = createPinia();
store.use(piniaPluginPersistedstate);

export function registerStore(app) {
  app.use(store);
}

export { useSystem, useUser };
export default store;
