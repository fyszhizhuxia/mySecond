import { getAction, postAction } from "./method";
export default {
  /**
   * 获取职位列表
   */
  getDate: (params) => {
    return getAction("/api/list/job", params);
  },
  login: (params) => {
    return postAction("/api/user/login", params);
  },
};
