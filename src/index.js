import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App/App'
// import styled from 'styled-components'
// import styles from './style.module.css'
// import './indexscss.scss'


// Styling :   a) CSS in React, b) SASS(Syntactically awesome stylesheets) in React
//             c)  CSS Modules in, d) styled components

// HTML, CSS, Bootstrap, Javascript
// ReactJS, Node, Express, MongoDB


// const Button=styled.button`
//   border: 2px solid black;
//   cursor: pointer;
//   background: transparent;

// &:hover{
//   background: teal;
//   color: white;
// }
// `
// function App(){
//     const[fruits,setFruits]=React.useState([
//       {id:1,name:"Apple",isFavourite:true},
//       {id:2,name:"Orange",isFavourite:false},
//       {id:3,name:"Banana",isFavourite:true},
//       {id:4,name:"Grapes",isFavourite:false}
//     ])
//     const handleClick=(item)=>{
//       console.log(item)
//       const newFruits=fruits.map((fruit)=>{
//          if(fruit.id===item.id){
//            return{
//             id:fruit.id,
//             name:fruit.name,
//             isFavourite:!fruit.isFavourite
//            }     
//          }else{
//            return fruit
//          }
//       })
//         setFruits(newFruits)
//     }

//     return(
//       <div>
//           <h2>No Styling Applied</h2>
//           <FruitList items={fruits} onClick={handleClick}/>
//       </div>
//     )
// }

// function FruitList({items,onClick}){
//       return(
//         <ul>
//             {items.map((item)=>(
//               <li key={item.id}>{item.name}
//               <Button type="button" onClick={()=>onClick(item)}>
//                   {item.isFavourite?'Unlike':'Like'}
//               </Button>
//               </li>
//             ))}
//         </ul>
//       )
// }

ReactDOM.render( 
    <App />
,
  document.getElementById('root')
);

// react Router: used for routing from one component to another component
