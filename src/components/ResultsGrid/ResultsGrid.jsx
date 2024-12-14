import PropTypes from "prop-types";
import BookCard from "../BookCard/BookCard";
import styles from "./ResultsGrid.module.css";

const ResultsGrid = ({ books }) => {
  return (
    <div className={styles.grid}>
      {books.map((book) => (
        <BookCard
          key={book.title}
          title={book.title}
          author={book.author}
          genres={book.genres}
          rating={book.rating}
          cover={book.cover}
        />
      ))}
    </div>
  );
};

ResultsGrid.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(PropTypes.string).isRequired,
      rating: PropTypes.number.isRequired,
      cover: PropTypes.string,
    })
  ).isRequired,
};

export default ResultsGrid;
