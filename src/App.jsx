import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
