import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import MapComponent from './components/MapComponent';
import ChartComponent from './components/ChartComponent';

const App = () => {
    return (
        <div>
            <Header />
            <SearchBox />
            <MapComponent />
            <ChartComponent />
            <Footer />
        </div>
    );
};

export default App;
