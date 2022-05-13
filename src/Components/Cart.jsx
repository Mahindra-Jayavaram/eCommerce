import { useDispatch, useSelector } from "react-redux";
import { REMOVE_ITEM } from "../Redux/CartPage/action";
import { Rateing } from "./Rateing";

export const Cart = () => {
  const { cart } = useSelector((store) => store.cart);
  console.log("cart:", cart);

  const dispatch = useDispatch()
  const handleRemove = ()=>{
    console.log("removed")
    dispatch({
            type:REMOVE_ITEM,
            // payload
    })
  }
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
            <button
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
            </button>
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
              onClick = {handleRemove}
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
