import "./Review.css";

import {useAuth} from "../Authentication/AuthContext";




export default function Reviews({
    email,
    comment
}) {

    const { currentUser } = useAuth();


    return (
        <div className="revies">
        <h4>User: {email}</h4>
        <p>Comment: {comment}</p>
        
        <style jsx="true">
            {
                `
                p{ margin: 6px; }
                
                `
            }
        </style>
    </div>
    )
}
