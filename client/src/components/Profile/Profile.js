import "./Profile.css";

import { useAuth } from "../Authentication/AuthContext";
import { Link } from "react-router-dom";

import UploadPhoto from "./UploadPhoto"


export default function Profile() {

    const { currentUser } = useAuth();

    return (
        <div className="profile">
            <div className="profile-wrapper">
                    <div className="profile-upImg">
                    <UploadPhoto/>
                    </div>
                    
                <div className="profile-info">
                    <h1>Lyubodos</h1>
                    <p class="profile-title">E-mail: {currentUser.email}</p>
                    <p>Status: Member</p>
                    <Link className="reset-btn" to="/profile-update">Reset Password</Link>
                </div>
            </div>

            <div className="profile-favourites">
                <h3>Favourite Games:</h3>
                <div className="favourites-wrapper">
                </div>
            </div>
        </div>
    )
}
