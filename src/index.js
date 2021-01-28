import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// Styling : 
function App(){
    const[fruits,setFruits]=React.useState([
      {id:1,name:"Apple",isFavourite:true},
      {id:2,name:"Orange",isFavourite:false},
      {id:3,name:"Banana",isFavourite:true},
      {id:4,name:"Grapes",isFavourite:false}
    ])
    const handleClick=(item)=>{
      const newFruits=fruits.map((fruit)=>{
         if(fruit.id===item.id){
           return{
            id:fruit.id,
            name:fruit.name,
            isFavourite:!fruit.isFavourite
           }     
         }else{
           return fruit
         }
      })
        setFruits(newFruits)
    }

    return(
      <div>
          <h2>No Styling Applied</h2>
          <FruitList items={fruits} onClick={handleClick}/>
      </div>
    )
}

function FruitList({items,onClick}){
      return(
        <ul>
            {items.map((item)=>(
              <li key={item.id}>{item.name}
              <button type="button" className="button" onClick={()=>onClick(item)}>
                  {item.isFavourite?'Unlike':'Like'}
              </button>
              </li>
            ))}
        </ul>
      )
}

ReactDOM.render( 
    <App />
,
  document.getElementById('root')
);


