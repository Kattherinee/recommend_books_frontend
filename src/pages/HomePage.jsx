import styles from "./HomePage.module.css";
import Header from "../components/Header/Header";
import SearchToggle from "../components/SearchToggle/SearchToggle";
import SearchInput from "../components/SearchInput/SearchInput";
import ResultsGrid from "../components/ResultsGrid/ResultsGrid";
import { useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [activeMode, setActiveMode] = useState("title");
  const [books, setBooks] = useState([]);

  const handleSearch = async (searchData) => {
    try {
      const endpoint =
        activeMode === "title"
          ? "http://127.0.0.1:5000/recommend/book"
          : "http://127.0.0.1:5000/recommend/prompt";

      const payload =
        activeMode === "title"
          ? {
              book_title: searchData.query,
              top_n: 5,
              min_rating: searchData.rating,
            }
          : {
              prompt: searchData.query,
              top_n: 5,
              min_rating: searchData.rating,
              genre_filter: searchData.genres,
            };

      console.log("Sending payload:", payload);

      const response = await axios.post(endpoint, payload);
      console.log("Response from server:", response.data);

      setBooks(response.data);
    } catch (err) {
      console.error("Ошибка при выполнении запроса:", err);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <SearchToggle activeMode={activeMode} setActiveMode={setActiveMode} />
      <SearchInput onSearch={handleSearch} />
      <ResultsGrid books={books} />
    </div>
  );
};

export default HomePage;
