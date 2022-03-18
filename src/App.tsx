import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Giveaways } from "./pages/giveaways";
import { Games } from "./pages/games";
import { ErrorPage } from "./pages/errorpage";
import "./i18n";
import { LoginPage } from "./pages/login";
import { Profile } from "./pages/profile";
import { Signup } from "./pages/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/giveaways" element={<Giveaways />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
