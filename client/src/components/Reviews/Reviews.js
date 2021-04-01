import "./Review.css";

import {useAuth} from "../Authentication/AuthContext";




export default function Reviews({
    userId,
    comment
}) {

    const { currentUser } = useAuth();


    return (
        <div className="revies">
        <h2>{currentUser 
        ? currentUser.email
        : "User"
        }</h2>
        <p>Comment: {comment}</p>
        
        <style jsx>
            {
                `
                p{ margin: 6px; }
                
                `
            }
        </style>
    </div>
    )
}
