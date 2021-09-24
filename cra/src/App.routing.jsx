import RouteHeader from "./components/RouteHeader";
import RouteHomePage from "./components/RouteHomePage";
import RouteAboutPage from "./components/RouteAboutPage";

import { Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <RouteHeader />
            <Route path="/" component={ RouteHomePage } />
            <Route path="/about" component={ RouteAboutPage } />
        </div>
    )
}

export default App;