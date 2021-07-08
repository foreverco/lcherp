import service from "../utils/request";

// 查询订单
export function working(data) {
  return service.request({
    method: "post",
    url: "/api/http/working",
    data: data
  });
}
