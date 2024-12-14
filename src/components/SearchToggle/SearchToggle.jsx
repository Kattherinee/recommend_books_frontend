import styles from "./SearchToggle.module.css";
import PropTypes from "prop-types";

const SearchToggle = ({ activeMode, setActiveMode }) => {
  return (
    <div className={styles.toggleContainer}>
      <button
        className={`${styles.toggleButton} ${
          activeMode === "title" ? styles.active : ""
        }`}
        onClick={() => setActiveMode("title")}
      >
        Поиск по названию
      </button>
      <button
        className={`${styles.toggleButton} ${
          activeMode === "prompt" ? styles.active : ""
        }`}
        onClick={() => setActiveMode("prompt")}
      >
        Поиск по промту
      </button>
    </div>
  );
};

SearchToggle.propTypes = {
  activeMode: PropTypes.string.isRequired,
  setActiveMode: PropTypes.string.isRequired,
};

export default SearchToggle;
