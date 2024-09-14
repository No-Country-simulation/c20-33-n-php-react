import { useContext } from "react";
import AuthContext from "../auth/AuthContext.jsx";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuth must be used within an AuthProvider. Make sure your component is wrapped within an <AuthProvider>."
    );
  }
  return context;
};
