import PropTypes from "prop-types";
import styles from "./BookCard.module.css";

const BookCard = ({ title, author, genres, rating, cover }) => {
  return (
    <div className={styles.card}>
      <img src={cover} alt={`Cover of ${title}`} className={styles.cover} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.author}>Author: {author}</p>
      <p className={styles.genres}>
        Genres: {genres && genres.length > 0 ? genres.join(", ") : "N/A"}
      </p>
      <p className={styles.rating}>Rating: {rating}</p>
    </div>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
};

export default BookCard;
