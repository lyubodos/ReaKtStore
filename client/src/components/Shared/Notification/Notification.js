import "./Notification.css";


const Notification = ({children}) => {


    if (!children) {
        return null
    }
    return (
        <div className="input-error">
            <span>
            {children}
            </span>
        </div>

    )
}  



export default Notification;