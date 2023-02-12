import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Mycontext from './Mycontext';
import TableApproval from './TableApproval';
import App from './App';


/*function ncard(val){
  return (
    <Card 
    imgsrc={val.imgsrc}
    title={val.title} 
    link={val.link} 
    name={val.name} />
  );
}
const oldarr=['aaditya','puja','nitu','prem'];

 const newarr = oldarr.map(function(cvalue,i){
   return i+" : "+cvalue+ " Agarwal";
 });
 console.log(newarr); 

const myArr=[
    {id:1,name:"Puja",degree:"B.Tech"},
    {id:2,name:"Aditya",degree:"M. Phil"},
    {id:3,name:"saurabh",degree:"B.tech"}
];
const newarr= myArr.map( (cval) => {
 return `My name is ${cval.name}. My highest degree is ${cval.degree}`
});
console.log(newarr); */

ReactDOM.render(
  <>
  <App></App>
   <TableApproval /> 
  </>
  ,document.getElementById('root')); 
