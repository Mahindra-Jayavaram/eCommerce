import { useState } from "react";
import { useSelector } from "react-redux";
import { Rateing } from "./Rateing";
import { Link } from "react-router-dom";

export const PaymentDetails = () => {
  const [newData, setNewData] = useState([])
  const { cart } = useSelector((store) => store.cart);
  console.log("cart:", cart);

 
  const handleRemove = (id)=>{

   let newCart = cart.filter((ele)=>ele.id !== id)
   console.log("new",newCart)
    setNewData(newCart)

    console.log("newCart",newCart)
  }
  console.log(newData, "newdata")
  return (
    <>
      <h1>Payment Details</h1>
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
            <Link to = "/mens"><button
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
              Shop More
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
    </>
  );
};
