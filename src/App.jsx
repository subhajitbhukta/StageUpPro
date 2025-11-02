import { Routes, Route } from "react-router-dom";
import Core from "./components/Core";
import { AppWithIntro } from "./components/IntroAnimation";

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<AppWithIntro />} />  
      <Route path="/pro" element={<Core />} />
      <Route path="/adv" element={<Core />} />
    </Routes>
  );
}
