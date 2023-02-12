import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const favSeries = "netflix";

const FavS = () => {
    if(favSeries === "amazon"){
        return (
    <Card 
    key={Sdata[0].id}
    imgsrc={Sdata[0].imgsrc}
    title={Sdata[0].title} 
    link={Sdata[0].link} 
    name={Sdata[0].name} /> 
        );
    }
    else{
        return (
            <Card 
            key={Sdata[1].id}
            imgsrc={Sdata[1].imgsrc}
            title={Sdata[1].title} 
            link={Sdata[1].link} 
            name={Sdata[1].name} /> 
                );   
    }

    
}

const App = () => ( 
<>
<h1 className="card_title">Top 5 NetFlix Series</h1>
<FavS />
</>
); 

export default App;
