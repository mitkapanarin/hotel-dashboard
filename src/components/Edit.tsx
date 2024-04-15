import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateHotel } from "../lib/controller";

interface IProps {
  editDescription: boolean;
  setEditDescription: React.Dispatch<React.SetStateAction<boolean>>;
  id?: string;
  currentDescription: string;
}

function Edit({
  editDescription,
  setEditDescription,
  id,
  currentDescription,
}: IProps) {
  const [newDescription, setNewDescription] = useState(currentDescription);
  const navigate = useNavigate();

  // Update newDescription when currentDescription changes
  useEffect(() => {
    setNewDescription(currentDescription);
  }, [currentDescription]);

  const handleUpdate = () => {
    // Update hotel
    updateHotel(id, { description: newDescription });
    // Close the edit mode
    setEditDescription(false);
    // Navigate back to homepage
    navigate("/");
  };

  return (
    <div className="edit">
      <label>Please enter the new hotel description below:</label>
      <textarea
        required
        name="description"
        id="description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button className="update-button" onClick={() => handleUpdate()}>
        Update Hotel
      </button>
    </div>
  );
}

export default Edit;
