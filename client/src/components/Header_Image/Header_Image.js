import mkCover from "../../images/mk11.jpg"
import "./Header_Image.css"


export default function() {
    return (
        <img className="header-img" src={mkCover} alt="mk_cover"></img>
    )
}