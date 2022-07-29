import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import Users from "./pages/users";
import UserForm from "./pages/users/UserForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} exact />
        <Route path="/add" element={<UserForm />} />
        <Route path="/edit/:id" element={<UserForm />} />
        <Route element={() => <h2>Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
