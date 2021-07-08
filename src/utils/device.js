export function getDeviceUUID() {
  let deviceId =
    localStorage.getItem("uni_deviceId") ||
    new Date().getTime() + "_" + Math.random().toString(36).substr(2);
  localStorage.setItem("uni_deviceId", deviceId);
  return deviceId;
}
