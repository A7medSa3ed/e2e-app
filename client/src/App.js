import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import Users from "./pages/users";
import UserForm from "./pages/users/UserForm";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} exact />
        <Route path="/add" element={<UserForm />} />
        <Route path="/edit/:id" element={<UserForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
