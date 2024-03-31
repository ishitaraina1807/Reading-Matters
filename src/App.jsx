import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import SearchPage from "./components/SearchPage";
import SearchResultPage from "./components/SearchResultPage";
import SignUp from "./components/SignUp";
import BookDescription from "./components/BookDescription";
import  BookLoader  from "./components/Loader";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading (true);
    setTimeout(() => {
      setLoading(false);
    },4000)

  }, []);

  return (
        <div>
        {
        loading ? 
        <div style={{minHeight:"100vh", width: "100%", display:"flex",justifyContent:"center",alignItems:"center"}}>
          <BookLoader  loading={loading} />
          </div>
           :
        <><NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/search-result" element={<SearchResultPage />} />
                <Route path="/book-description" element={<BookDescription />} />
        </Routes>
              <Footer />
              </>
              }
</div>

  );
            }
export default App;
