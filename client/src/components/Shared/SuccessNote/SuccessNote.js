
import "./SuccessNote.css"

export default function SuccessNote(
    {children}
    ) {

    if (!children) {
        return null
    }
    return (
        <div className="input-success">
            <span>
            {children}
            </span>
        </div>

    )
} 