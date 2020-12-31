import React from 'react';
import Card from './Card';
import './App.css';
import Sdata from './Sdata';

function App() {
    return (
        <>
            <h1 className="heading_style">List of Top 10 Netflix Series of 2020</h1>
            {Sdata.map((val) => {
                return (
                    <Card
                        imgSrc={val.imgSrc}
                        title={val.title}
                        sname={val.sname}
                        link={val.link}
                        target={val.target}
                    />
                );
            })}
        </>
    )
}

export default App;