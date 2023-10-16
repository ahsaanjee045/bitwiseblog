import { Outlet, Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Homepage from "./pages/Homepage";
import Articles from "./pages/Articles";
import About from "./pages/About";
import LoginPage from "./pages/Auth/LoginPage";
import Signup from "./pages/Auth/Signup";
import NotFound from "./pages/NotFound";
import AuthWrapper from "./components/AuthWrapper";
import { Toaster } from "react-hot-toast";
import { Contact } from "lucide-react";
import { useEffect } from "react";
import authService from "./appwrite/auth.service";
import { useDispatch } from "react-redux";
import { login, logout } from "./slices/userSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((user) => {
        console.log("In APP => ", user);
        // authService.logout()
        dispatch(login({ user }));
      })
      .catch((err) => dispatch(logout()));
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Homepage />} />
          <Route
            path="articles"
            element={
              <AuthWrapper auth={true}>
                <Articles />
              </AuthWrapper>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route
          path="/login"
          element={
            <AuthWrapper auth={false}>
              <LoginPage />
            </AuthWrapper>
          }
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
