import axios from "@/utils/http.js";

//post
export function postAction(url, parameter) {
  return axios({
    url: url,
    method: "post",
    data: parameter,
  });
}

//get
export function getAction(url, data) {
  return axios({
    url: url,
    method: "get",
    data: data,
  });
}
