import router from "./index";
import { getToken } from "@/utils/storage.js";
router.beforeEach((to, from, next) => {
  if (getToken()) {
    next();
  } else {
    if (to.path === "/login") {
      next();
    } else {
      next({ path: "/login" });
    }
  }
});
