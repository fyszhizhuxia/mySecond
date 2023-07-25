// 菜单权限控制
export function filterRoutes(routes, userRoleCode) {
  const filtered = [];
  for (const route of routes) {
    if (
      route.meta &&
      !route.meta.hide &&
      route.meta.roleCode.includes(userRoleCode)
    ) {
      const filteredRoute = { ...route };
      if (route.children) {
        // 过滤路由
        filteredRoute.children = filterRoutes(route.children, userRoleCode);
      }
      filtered.push(filteredRoute);
    }
  }
  return filtered;
}
// 获取assets静态资源(不能用require展示图片)
export function getAssetsFile(url) {
  // return `${import.meta.env.BASE_URL}src/images/${url}`;
  return new URL(`../images/${url}`, import.meta.url).href;
}
export function param2Obj(url) {
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, " ") +
      '"}'
  );
}

const ua = navigator.userAgent || {};
export const isMobile = !!ua.match(
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
);
