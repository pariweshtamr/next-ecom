import { RatingStyles } from "./ratingStyles"
import StarIcon from "@mui/icons-material/Star"
import StarHalfIcon from "@mui/icons-material/StarHalf"
import StarOutlineIcon from "@mui/icons-material/StarOutline"

const Rating = ({ rating }) => {
  return (
    <RatingStyles>
      <span>
        {rating >= 1 ? (
          <StarIcon />
        ) : rating >= 0.5 ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
      </span>
      <span>
        {rating >= 2 ? (
          <StarIcon />
        ) : rating >= 1.5 ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
      </span>
      <span>
        {rating >= 3 ? (
          <StarIcon />
        ) : rating >= 2.5 ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
      </span>
      <span>
        {rating >= 4 ? (
          <StarIcon />
        ) : rating >= 3.5 ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
      </span>
      <span>
        {rating >= 5 ? (
          <StarIcon />
        ) : rating >= 4.5 ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
      </span>
    </RatingStyles>
  )
}

export default Rating
