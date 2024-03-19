import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Login from "./components/Auth/Login";
import SearchPage from "./components/SearchPage";
import SearchResultPage from "./components/SearchResultPage";
import SignUp from "./components/Auth/SignUp";
import { AuthProvider } from "./components/AuthProvider"; 
import BookDescription from "./components/BookDescription";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search-result" element={<SearchResultPage />} />
          <Route path="/book-description" element={<BookDescription />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
