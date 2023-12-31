import { createContext, useContext } from "react";

export const UserContext = createContext(undefined);

export const useUserCredentials = () => {
  const [
    userRole,
    setUserRole,
    isLogin,
    userCredentials,
    userIsLoading,
    orders,
    setOrders,
  ] = useContext(UserContext);
  if (
    userRole === undefined ||
    setUserRole === undefined ||
    isLogin === undefined ||
    userCredentials === undefined ||
    userIsLoading === undefined ||
    orders === undefined ||
    setOrders === undefined
  ) {
    throw new Error("useUserCredentials must be used with a UserContext");
  }

  return [
    userRole,
    setUserRole,
    isLogin,
    userCredentials,
    userIsLoading,
    orders,
    setOrders,
  ];
};
