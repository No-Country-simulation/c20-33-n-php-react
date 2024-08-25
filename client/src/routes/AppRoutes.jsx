import { Navigate, Route, Routes } from "react-router-dom";
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
} from "../presentation/screens";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
