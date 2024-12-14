import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import styles from "./SearchInput.module.css";
import StarRating from "../StarRating/StarRating";

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [rating, setRating] = useState(2.5);
  const [genres, setGenres] = useState([]);
  const [loadingGenres, setLoadingGenres] = useState(false);

  useEffect(() => {
    const fetchGenres = async () => {
      setLoadingGenres(true);
      try {
        const response = await fetch("http://127.0.0.1:5000/genres");
        const data = await response.json();
        const formattedGenres = data.genres.map((genre) => ({
          value: genre,
          label: genre,
        }));
        setGenres(formattedGenres);
      } catch (err) {
        console.error("Ошибка загрузки жанров:", err);
      } finally {
        setLoadingGenres(false);
      }
    };

    fetchGenres();
  }, []);

  const handleSearch = () => {
    const selectedGenreValues = selectedGenres.map((genre) => genre.value);
    onSearch({
      query,
      genres: selectedGenreValues.length > 0 ? selectedGenreValues : [],
      rating,
    });
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder="Введите название или промт"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className={styles.filters}>
        {loadingGenres ? (
          <p>Загрузка жанров...</p>
        ) : (
          <Select
            isMulti
            options={genres}
            value={selectedGenres}
            onChange={setSelectedGenres}
            className={styles.select}
            placeholder="Выберите жанры"
          />
        )}
        <button className={styles.button} onClick={handleSearch}>
          Искать
        </button>
        <StarRating initialRating={2.5} onRatingChange={handleRatingChange} />
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;
