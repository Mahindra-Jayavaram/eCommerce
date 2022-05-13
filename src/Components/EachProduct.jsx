import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Rateing } from './Rateing';
import { useDispatch } from 'react-redux';
import axios from "axios"
import { Link } from 'react-router-dom';
import { Footer } from './Footer';
import { ADD_TO_CART } from '../Redux/CartPage/action';

export const EachProduct = () => {
    const [eachproduct, setEachProduct] = useState([])
    // const [mensData, setMensData] = useState([])

    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:1343/Data/${id}`).then((res)=>{
            setEachProduct(res.data);
        })
    }, [])
    const handleAdd =(e)=>{

        dispatch({
            type:ADD_TO_CART,
            payload:eachproduct
        })
        // dispatch(eachproduct);

    }
    return (
        <div>
          
            <div className='eachpage-wrapper' style={{ width: '95%', margin: 'auto', display: 'flex', marginTop: '30px' }}>

                <div style={{ width: '35%', marginLeft: '5%' }}>
                    <img src={eachproduct.image} style={{ width: '100%' }} alt="" />
                </div>

                <div style={{ width: '60%',  marginLeft:'10px', padding:'0% 3%' }}>
                    <div className='title-div' style={{ width: '70%', textAlign: 'left' }}>
                        <p style={{ fontSize: '22.4px' }}>{eachproduct.title}</p>
                    <FavoriteBorderIcon style={{ float: 'right' }}></FavoriteBorderIcon>

                        <div className='rating-each' style={{ display: 'flex' }}>
                            {/* <Stack spacing={1} >
                                <Rating name="half-rating-read" defaultValue={eachproduct.rating} precision={0.5} readOnly size='small' />
                            </Stack> */}
                            <Rateing/>
                            <div style={{ margin: ' -10px 20px' }}>
                                <p>( {eachproduct.rating} )</p>
                            </div>
                            <div style={{ margin: '-10px 20px 0px 0px' }}>
                                <p>{eachproduct.reviews}reviews</p>
                            </div>
                            <div style={{ margin: '10px 10px' }}>
                                20 selfies
                            </div>

                        </div>
                        <div>
                            MRP <s>{eachproduct.price_before}</s> (inclusive of all taxes)
                        </div>
                        <div style={{ width: '50%', display: 'flex', marginTop: '50px' }}>
                            <div style={{ fontSize: '28px', color: '#e40046', padding: '0' }}>Rs.{eachproduct.price_after}</div>
                            <div style={{
                                margin: '10px 40px',
                                width: '30%',
                                padding: '0% 3%',
                                fontSize: '15px',
                                border: '1px solid #ccc',
                                borderRadius: '2px',
                                height: '20px',


                            }}> <span style={{ color: '#8a8787' }}>{eachproduct.offer}%Off</span>
                            </div>

                        </div>

                        <div>
                            <p>7 days easy Returns</p> 
                             <p>Trustpay: 100% payment protection Return or Replacement is applicable for 7 days after delivery</p>
                        </div>

                        <div>
                            <p>
                            Item is available at 515004
                            </p>
                            <ul>
                                <li>Delivery in 5 - 7 days Free</li>
                                <li>Cash on delivery also available for this location</li>
                            </ul>
                        </div>
                        <div style={{marginBottom:'50px'}}>
                            <button style={{width:'30%', padding:'4%', border:'none', background:'#333', color:'#fff', marginRight:'20px', borderRadius:'3px', fontSize:'14px'}}
                            onClick={handleAdd}
                            >
                                <Link to={`/cart`} style={{color:'#fff', textDecoration:'none'}} > ADD TO CART</Link>
                               
                                </button>
                            <button style={{width:'30%',padding:'4%', border:'none', background:'rgb(63,81,181)', color:'#fff', borderRadius:'3px', fontSize:'14px',}}> <Link to = "" style={{color:'#fff', textDecoration:'none'}} > ADD TO WISHLIST</Link>  </button>

                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}