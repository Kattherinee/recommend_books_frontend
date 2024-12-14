import { useState, useEffect } from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const GenreSelector = ({ onGenreChange }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
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
      }
    };

    fetchGenres();
  }, []);

  return (
    <Select
      isMulti
      options={genres}
      onChange={onGenreChange}
      placeholder="Выберите жанры"
    />
  );
};

GenreSelector.propTypes = {
  onGenreChange: PropTypes.func.isRequired,
};

export default GenreSelector;
