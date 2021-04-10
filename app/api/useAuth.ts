import jwtDecode from "jwt-decode";
import { useContext } from "react";
import AuthContext from "../auth/context";
import storage from "../auth/storage";

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    storage.removeToken();
  };

  const login = (authToken: any) => {
    const user = jwtDecode(authToken);
    setUser(user);
    storage.storeToken(authToken);
  };

  return { user, logout, login };
};
