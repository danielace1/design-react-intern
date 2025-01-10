import { Outlet } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";

const App = () => {
  return (
    <div>
      <TheNavbar />
      <Outlet />
    </div>
  );
};
export default App;
