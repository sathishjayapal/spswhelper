import { Fragment } from 'react';

import Header from './components/Layout/Header';
import DevelopmentDetails from './components/DevelopmentDetails/DevelopmentDetails';

function App() {
    return (
        <Fragment>
            <Header />
            <main>
                <DevelopmentDetails />
            </main>
        </Fragment>
    );
}

export default App;
