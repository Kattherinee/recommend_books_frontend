import ReactStars from "react-rating-stars-component";
import PropTypes from "prop-types";

const StarRating = ({ initialRating = 2.5, onRatingChange }) => {
  const handleRatingChange = (newRating) => {
    if (onRatingChange && newRating >= 2.5) {
      onRatingChange(newRating);
    }
  };

  return (
    <div>
      <ReactStars
        count={5}
        value={initialRating}
        onChange={handleRatingChange}
        size={30}
        isHalf={true}
        activeColor="#ffd700"
      />
    </div>
  );
};

StarRating.propTypes = {
  initialRating: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export default StarRating;
