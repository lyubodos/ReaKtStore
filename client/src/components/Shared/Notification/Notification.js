import "./Notification.css";



const Notification = ({children}) => {

    console.log(children);

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