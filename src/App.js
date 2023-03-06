import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostDetails from "./components/PostDetails";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/postdetails" element={<PostDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
