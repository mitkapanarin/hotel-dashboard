import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteHotel } from "../lib/controller";
import { NewHotelType } from "../types/hotel";
import Edit from "./Edit";

interface IProps {
  hotel: NewHotelType;
  detailsPage?: boolean;
}

function Information({ hotel, detailsPage }: IProps) {
  const [editDescription, setEditDescription] = useState(false);
  const [currentDescription, setCurrentDescription] = useState(
    hotel.description
  );

  const navigate = useNavigate();

  const handleEditDescription = () => {
    setEditDescription(!editDescription);
    // Set current description as the initial value when editing starts
    setCurrentDescription(hotel.description);
  };

  return (
    <div className="hotel-preview">
      <div className="image-container">
        <img className="location-image" src={hotel.location} alt="Hotel" />
        <div className="highlights">
          <div className="highlights-text">
            <h2>{hotel.title}</h2>
            <p className="region">{hotel.region}</p>
          </div>
          <div className="highlights-price">
            <h2 className="per-night">£{hotel.perNight}</h2>
            <p>per night</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="description">
        <span className="reviews">
          <strong className="review-number">{hotel.stars} stars</strong> (based
          on {hotel.review} reviews)
        </span>
        <hr />
        <span className="feature">Main Feature: {hotel?.feature}</span>
        {detailsPage ? (
          <>
            <p className="description-text">
              {currentDescription} {/* Display the current description */}
              <strong className="edit-text" onClick={handleEditDescription}>
                Edit Description
              </strong>
              {editDescription ? (
                <Edit
                  editDescription={editDescription}
                  setEditDescription={setEditDescription}
                  id={hotel.id}
                  currentDescription={currentDescription as string}
                />
              ) : null}
            </p>
            <button onClick={() => deleteHotel(hotel.id, navigate)}>
              Delete Hotel
            </button>
          </>
        ) : (
          <Link to={`/hotels/${hotel.id}`}>
            <button className="moreinfo-btn">View More Information</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Information;
