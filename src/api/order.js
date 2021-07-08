import service from "../utils/request";

// 查询订单
export function order(data) {
  return service.request({
    method: "post",
    url: "/api/http/order",
    data: data
  });
}

// 新增订单
export function addorder(data) {
  return service.request({
    method: "post",
    url: "/api/http/addorder",
    data: data
  });
}

// 删除订单
export function delorder(data) {
  return service.request({
    method: "post",
    url: "/api/http/delorder",
    data: data
  });
}

// 修改订单
export function updateorder(data) {
  return service.request({
    method: "post",
    url: "/api/http/updateorder",
    data: data
  });
}
