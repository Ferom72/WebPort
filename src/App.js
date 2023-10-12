import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import LandingPage from "./pages/landingpage/LandingPage";
import MoreInfo from "./pages/landingpage/sections/webprojects/moreinfo/MoreInfo";

function App() {
  const [info, setInfo] = useState(null);

  function SetProjectInfo(value) {
    setInfo(value);
  }

  return (
    <UserContext.Provider value={{ info, SetProjectInfo }}>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/moreinfo" element={<MoreInfo info={info} />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
