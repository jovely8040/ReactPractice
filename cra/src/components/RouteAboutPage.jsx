import { Link } from 'react-router-dom';

function RouteAboutPage() {
    return (
        <div>
            <h3>Home</h3>
            <p>현재 path = /about</p>
            <Link to="/">Link to Home</Link>
        </div>
    ) // -> 링크 걸어주기
}

export default RouteAboutPage;