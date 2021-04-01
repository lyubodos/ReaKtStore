import "./Profile.css";

import { useAuth } from "../Authentication/AuthContext";



export default function Profile() {

    const { currentUser } = useAuth();

    return (
        <div className="profile">
            <div className="profile-wrapper">
                <div className="profile-img">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
                    <div className="btn-wrapper">
                    <button>Upload photo</button>
                    <button>Select avatar</button>
                    </div>
               
                </div>
                <div className="profile-info">
                    <h1>Lyubodos</h1>
                    <p class="profile-title">E-mail: {currentUser.email}</p>
                    <p>Status: Member</p>
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
