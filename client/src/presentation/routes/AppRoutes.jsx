import { Routes, Route } from "react-router-dom";
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  CartScreen,
  BuyerScreen,
  ForgotPassword,
  VerifyEmail,
} from "../screens";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-email/:id/:hash" element={<VerifyEmail />} />
      <Route path="/profile" element={<BuyerScreen />} />
    </Routes>
  );
};
