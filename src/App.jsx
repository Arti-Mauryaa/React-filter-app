import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import menu from './Menu'
// import '../node_modules/bootstrap/dist/js/bootstrap.js'

function App() {

  const [item , setItem] = useState(menu)

  const filterItem = (cate)=>{

    const updateItem = menu.filter((curElem)=>{
       return (curElem.category === cate);
    });
   
    setItem(updateItem);

    
  
    // console.log(updateItem)
    // console.log(data)
  }
  

  // const search = (evt)=>{
  //   const data = evt.target.value
  //   return 
  //   // console.log(data)
  // }
  return (
    <>

    <div className="heading_style">
    <h1>Order Your Favourite dish</h1>
      <button className='btn btn-warning mx-3' onClick={()=>filterItem("lunch")}>Lunch</button>
      <button className='btn btn-warning mx-3' onClick={()=>filterItem("breakfast")}>Breakfast</button>
      <button className='btn btn-warning mx-3' onClick={()=>filterItem("dinner")}>Dinner</button>
      <button className='btn btn-warning mx-3' onClick={()=>filterItem("evening")}>Evening</button>
      <button className='btn btn-warning mx-3' onClick={()=>setItem(menu)}>All</button>
      {/* <input type="text" placeholder='search item' onChange={search}/> */}
    </div>
  <div className="contain">
      {
        item.map((data)=>{
          // console.log(data)
          
          const {id , img , name , price , category, description} = data
            return(          
             <div className="cards " key= {id}>
              <div className="card" >
                  <img src={img} alt="mypic" className='card_img'/>
                  <div className="card_info">
                      <span className="card_category">{description}</span>
                      <h3 className='card_title'>{name}</h3>
                      <p>{category}</p>
                      <p>{price}</p>
                      <a href="" target='_blank'>
                          <button className='btn1'>Order Now</button>
                      </a>
                  </div>
              </div>
             </div>
            )
        })
      }
      </div>
    </>
  )
}

export default App
