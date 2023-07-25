import { getAction, postAction } from "./method";
export default {
  // 账号类型
  accType: (params) => {
    return postAction("/api/user/accType", params);
  },
  selfInfo: (params) => {
    return postAction("/api/user/selfInfo", params);
  },
};
