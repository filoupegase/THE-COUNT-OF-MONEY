import * as React from 'react';
import { Link } from "react-router-dom";


const Profile = () => {
    return (
        <>
            <p>Page Profile</p>
            <Link to={ "/" }>
                Home
            </Link>
        </>
    )
};

export default Profile;