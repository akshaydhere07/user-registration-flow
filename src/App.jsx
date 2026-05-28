// App.jsx

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "./App.css";

import bg_admin_dash from "./assets/admin-dashboard.png";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
import Step5 from "./pages/Step5";
import Step6 from "./pages/Step6";
import Step7 from "./pages/Step7";
import Welcome from "./pages/Welcome";

// -----------------------------------------
// LAYOUT COMPONENT
// -----------------------------------------

function Layout() {
  const location = useLocation();

  // HIDE HEADER & FOOTER ON WELCOME PAGE
  const hideLayout =
    location.pathname === "/welcome";

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: hideLayout
          ? "none"
          : `url(${bg_admin_dash})`,

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      {/* HEADER */}
      {!hideLayout && <Header />}

      {/* PAGE CONTENT */}
      <div className="flex-1">
        <Routes>
          
          {/* STEP 1 */}
          <Route
            path="/"
            element={<Step1 />}
          />

          {/* STEP 2 */}
          <Route
            path="/step-2"
            element={<Step2 />}
          />

          {/* STEP 3 */}
          <Route
            path="/step-3"
            element={<Step3 />}
          />

          {/* STEP 4 */}
          <Route
            path="/step-4"
            element={<Step4 />}
          />

          {/* STEP 5 */}
          <Route
            path="/step-5"
            element={<Step5 />}
          />

          {/* STEP 6 */}
          <Route
            path="/step-6"
            element={<Step6 />}
          />

          {/* STEP 7 */}
          <Route
            path="/step-7"
            element={<Step7 />}
          />

          {/* WELCOME */}
          <Route
            path="/welcome"
            element={<Welcome />}
          />
        </Routes>
      </div>

      {/* FOOTER */}
      {!hideLayout && <Footer />}
    </div>
  );
}

// -----------------------------------------
// APP COMPONENT
// -----------------------------------------

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;