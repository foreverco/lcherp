import service from "../utils/request";

/**
 * 提交表单
 */
export function formsubmit(data) {
  return service.request({
    method: "post",
    url: "/api/offerInfo/add",
    data: data
  });
}

export function test(data) {
  console.log(data);
  return service.request({
    method: "post",
    url: "/api/http/register",
    // url: "/api/cloudfunctions/get_author",
    data: data
  });
}

// 登录
export function login(data) {
  console.log(data);
  return service.request({
    method: "post",
    url: "/api/http/login",
    data: data
  });
}
