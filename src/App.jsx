import { Route, Routes } from "react-router-dom";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
      </Routes>
    </div>
  );
};

export default App;
