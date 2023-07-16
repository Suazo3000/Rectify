import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_THERAPIST } from "../utils/mutations";

import Auth from "../utils/auth";

const Therapists = ({ setIsLoggedIn }) => {
  const [selectedTherapist, setSelectedTherapist] = useState(null); // Updated state variable

  const [addTherapists, { error, data }] = useMutation(ADD_THERAPIST);

  const therapists = [
    { id: 1, name: "Therapist 1" },
    { id: 2, name: "Therapist 2" },
    { id: 3, name: "Therapist 3" },
    { id: 4, name: "Therapist 4" },
    { id: 5, name: "Therapist 5" },
  ];

  const handleTherapistSelection = (therapist) => {
    setSelectedTherapist(therapist);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Selected Therapist:", selectedTherapist); // Log the selected therapist

    if (selectedTherapist) {
      try {
        // Perform the necessary action upon therapist selection
        console.log("Selected Therapist:", selectedTherapist);

        // Example: Login the user with the selected therapist
        Auth.login(selectedTherapist.name);

        setIsLoggedIn(true);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">
            Select a Therapist
          </h4>
          <div className="card-body">
            <p>Choose from the top five therapists:</p>

            <ul className="list-group">
              {therapists.map((therapist) => (
                <li
                  key={therapist.id}
                  className={`list-group-item ${
                    selectedTherapist && selectedTherapist.id === therapist.id
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleTherapistSelection(therapist)}
                  onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  {therapist.name}
                </li>
              ))}
            </ul>

            {selectedTherapist && (
              <div className="mt-3">
                <p>
                  You have selected <strong>{selectedTherapist.name}</strong> as
                  your therapist.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Therapists;
