import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  editDescription: boolean;
  setEditDescription: React.Dispatch<React.SetStateAction<boolean>>;
  id?: string;
}

function Edit({ editDescription, setEditDescription, id }: IProps) {
  const [newDescription, setNewDescription] = useState("");

  const navigate = useNavigate();

  const handleUpdate = () => {
    // update hotel
    setEditDescription(!editDescription);
    // navigate back to homepage
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
