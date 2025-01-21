import { Routes, Route } from "react-router";
import { Home } from "../pages/home/Home";
import { BookList } from "../pages/bookList/BookList";
import { Contact } from "../pages/contact/Contact";
import { NotFound } from "../pages/notFound/NotFound";
import { Login } from "../auth/LoginOut.jsx";
import { PrivateRoute } from "../auth/PrivateRoute.jsx";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/books" 
        element={
          <PrivateRoute>
            <BookList />
          </PrivateRoute>
        } 
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}