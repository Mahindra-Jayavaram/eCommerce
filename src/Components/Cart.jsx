import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { ADD_TO_CART } from '../Redux/CartPage/action';
import { useSelector } from "react-redux";
import { Rateing } from "./Rateing";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

export const Cart = () => {
  const [newData, setNewData] = useState([])
  const { cart } = useSelector((store) => store.cart);
  console.log("cart:", cart);

  // const dispatch = useDispatch()
 
  const handleRemove = (id)=>{
  //   fetch(`http://localhost:1343/Data/${id.id}`, {
  //     method: 'DELETE',
  //   })
  //   .then(res => res.json()) // or res.json()
  //   .then(res => setNewData(res))
  //   dispatch({
  //     type:ADD_TO_CART,
  //     payload : newData,
  // })
  // console.log("removed")

   let newCart = cart.filter((ele)=>ele.id !== id)
   console.log("new",newCart)
    setNewData(newCart)

    console.log("newCart",newCart)
  }
  console.log(newData, "newdata")
  return (
    <>
      <h1>Cart Page</h1>
      {cart.map((e,i) => {
       return(
           
       <div key = {i} style={{ display: "flex" }}>
          <div>
            <img src={e.image} alt="" style={{width:"100%", height:"300px"}} />
          </div>
          <div style={{ width: "30%", marginLeft: "20px" }}>
            <h2>{e.title}</h2>
            <div style={{ display: "flex", marginLeft: "30%" }}>
              <Rateing />
              <p>{e.rateing}</p>
              <p>{e.reviews}</p>
            </div>
            <div style={{ display: "flex", gap: "10px", marginLeft: "30%" }}>
              MRP<s>{e.price_before}</s>
              <p style={{ marginTop: "0px" }}> {e.price_after}</p>
            </div>
            <p>Discount:{e.offer}%</p>
            <Link to = "/payment"><button
              style={{
                width: "30%",
                padding: "4%",
                border: "none",
                background: "rgb(63,81,181)",
                color: "#fff",
                borderRadius: "3px",
                fontSize: "14px",
              }}
            >
              BUY NOW
            </button></Link>
            <button
              style={{
                width: "30%",
                padding: "4%",
                border: "none",
                background: "rgb(63,81,181)",
                color: "#fff",
                borderRadius: "3px",
                fontSize: "14px",
                marginLeft:"20px"
              }}
              onClick = {()=>handleRemove(e.id)}
            >
              REMOVE
            </button>
          </div>
        </div>
       ) 
      })}
      <Footer/>
    </>
  );
};
