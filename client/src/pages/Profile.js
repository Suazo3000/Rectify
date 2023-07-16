import React from 'react';
import { useParams } from 'react-router-dom';


const Profile = ({ Therapist }) => {
    const { therapistId } = useParams();

    const therapist = {
        id: therapistId,
        name: 'Therapist Name',
        specialty: 'Specialty',
        location: 'Location',
        bio: 'Bio',
    };
    
    return (
        <div>
            <h2>Profile</h2>
            {therapist && (
                <div>
                    <h3>{therapist.name}</h3>
                    <p>{therapist.specialty}</p>
                    <p>{therapist.location}</p>
                    <p>{therapist.bio}</p>
                </div>
            )}
        </div>
    );
};
export default Profile;
