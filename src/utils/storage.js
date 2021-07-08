const tokenKey = "tokenkey";
const usernameKey = "usernameKey";
export function getToken() {
  return localStorage.getItem(tokenKey);
}
export function setToken(value) {
  return localStorage.setItem(tokenKey, value);
}
export function removeToken() {
  return localStorage.removeItem(tokenKey);
}

export function getUsername() {
  return localStorage.getItem(usernameKey);
}
export function setUsername(value) {
  return localStorage.setItem(usernameKey, value);
}
export function removeUsername() {
  return localStorage.removeItem(usernameKey);
}
