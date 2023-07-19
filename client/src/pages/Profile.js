import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';




const Profile = () => {
    const { therapistId } = useParams();
    const [therapist, setTherapist] = useState(null);

    useEffect(() => {
        const fetchTherapist = async () => {
            try {
                const response = await fetch(`/api/therapists/${therapistId}`);
                const data = await response.json();
                setTherapist(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchTherapist();
    }, [therapistId]);


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
