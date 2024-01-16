// TODO: create a .env file with token string
export const isAuthenticated = () => localStorage.getItem("token") !== null;