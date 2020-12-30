import React from 'react';
import Card from './Card';
import './App.css';
import Sdata from './Sdata';

function App() {
    return (
        <>
            <h1 className="heading_style">List of Top 5 Netflix Series of 2020</h1>
            <Card imgSrc={Sdata[0].imgSrc}
                title={Sdata[0].title}
                sname={Sdata[0].sname} link={Sdata[0].link} target={Sdata[0].target} />
            <Card imgSrc={Sdata[1].imgSrc}
                title={Sdata[1].title}
                sname={Sdata[1].sname} link={Sdata[1].link} target={Sdata[1].target} />
            <Card imgSrc={Sdata[2].imgSrc}
                title={Sdata[2].title}
                sname={Sdata[2].sname} link={Sdata[2].link} target={Sdata[2].target} />
            <Card imgSrc={Sdata[3].imgSrc}
                title={Sdata[3].title}
                sname={Sdata[3].sname} link={Sdata[3].link} target={Sdata[3].target} />
            <Card imgSrc={Sdata[4].imgSrc}
                title={Sdata[4].title}
                sname={Sdata[4].sname} link={Sdata[4].link} target={Sdata[4].target} />
        </>
    )
}

export default App;