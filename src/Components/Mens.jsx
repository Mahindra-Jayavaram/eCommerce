import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rateing } from "./Rateing";
import { Link } from "react-router-dom";
import { getMensData } from "../Redux/Mens/action";

export const Mens = () => {
  const dispatch = useDispatch();
  const { mens } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getMensData());
    console.log(mens);
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            width: "100%",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            float: "right",
            padding: "1%",
          }}
        >
          {mens.map((product, index) => {
            return (
              <div
                key={index}
                className="product-item"
                style={{ width: "89%", marginBottom: "50px", padding: "5% 4%",  }}
              >
                <Link to={`/mens/${product.id}`} style={{textDecoration:"none"}}>
                  <div style={{ width: "100%", zIndex: "1", }}>
                    <img
                      src={product.image}
                      key={index}
                      alt=""
                      style={{ width: "100%", display: "block" }}
                    />
                  </div>
                  <div
                    style={{
                      height: "35px",
                      overflow: "hidden",
                      textAlign: "left",
                      fontSize: "13px",
                      color: "#8a8787",
                      margin: "10px 0px",
                      lineHeight: "19px",
                    }}
                  >
                    {product.title}
                  </div>
                  <div style={{ display: "flex", margin: "10px 0px" }}>
                    <div
                      style={{
                        marginRight: "10px",
                        fontSize: "13px",
                        color: "#ccc",
                      }}
                    >
                      {" "}
                      <s>{product.price_before}</s>
                    </div>
                    <div
                      style={{
                        marginRight: "10px",
                        fontSize: "14px",
                        color: "#333",
                        fontWeight: "630",
                      }}
                    >
                      Rs.{product.price_after}
                    </div>
                    <div
                      style={{
                        marginRight: "10px",
                        padding: "0% 2%",
                        fontSize: "13px",
                        border: "1px solid #ccc",
                        borderRadius: "2px",
                      }}
                    >
                      {" "}
                      <span style={{ color: "#8a8787" }}>
                        {product.offer}%Off
                      </span>
                    </div>
                  </div>
                </Link>
                <div>
                    <Rateing />
                    <div
                      style={{
                        float: "right",
                        marginTop: "-35px",
                        marginRight: "50px",
                        color: "#8a8787",
                        fontSize: "13px",
                      }}
                    >
                      ( {product.reviews} )
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
