import "./PageNotFound.css";

import {Link} from 'react-router-dom';

export default function PageNotFound() {
    return (
        <div className="page-not-found">
            <h1>404</h1>
            <h1>Page not FOUND!</h1>
            <img src="https://pbs.twimg.com/profile_images/1377307045754462209/qsWD-SCE_400x400.jpg" />
            <h2>Are You sure You typed in the correct address?</h2>
            <p>Do not worry! Use <Link to="/">this</Link> link and head back to our main page</p>
        </div>
    )
}
