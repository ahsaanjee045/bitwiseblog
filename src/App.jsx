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

export default function App() {
  return (
    <>
      <Toaster />
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
