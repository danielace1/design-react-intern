import { Outlet } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";
import { useState } from "react";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <TheNavbar showForm={showForm} handleShowForm={handleShowForm} />
      <Outlet context={{ showForm, handleShowForm }} />
    </div>
  );
};
export default App;
