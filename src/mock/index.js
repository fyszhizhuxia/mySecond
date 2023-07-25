import Mock from "mockjs";

Mock.mock("/api/user/login", "post", {
  code: 200,
  data: {
    name: "@name",
    age: "@integer(20, 40)",
    "gender|1": ["男", "女"],
  },
});

Mock.mock("/api/list/job", "get", {
  code: 200,
  data: {
    "obj|1-3": [
      {
        key: "1",
        name: "胡彦斌",
        plat: "微信",
        phone: "031-944590489",
      },
      {
        key: "2",
        name: "胡彦祖",
        plat: "QQ",
        phone: "048-7897897",
      },
    ],
  },
});
// 账号类型accType
Mock.mock("/api/user/accType", "post", {
  code: 200,
  data: {
    type: "猫咪",
    id: "001",
    name: "圆圆",
    phone: "17878",
    email: "yuanyuan@.com",
    password: "123456",
    time: "2011-6-19",
  },
});
// 个人信息/api/user/selfInfo
Mock.mock("/api/user/selfInfo", "post", {
  code: 200,
  data: {
    type: "银渐层",
    nation: "英短",
    nickName: "苦瓜",
    sex: "1",
    chara: "非常活泼，爱干净",
    idCard: "account/yuan.jpg",
  },
});
export default Mock;
