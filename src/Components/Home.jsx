import { NavCarousel } from "./Corousle"
import { Buttons } from "./Button"
import { Footer } from "./Footer"
import "./home.css"

export const Home = ()=>{

    return (
        <>
        <marquee behavior="" direction="right"><h1>Home page</h1></marquee>
        <NavCarousel/>
        <div style={{
            width:"80%",
            height: "50px",
            background: "rgb(206,52,51)",
            margin :"auto",
            marginTop:"20px"
        }}><h3 style={{padding:"10px"}}>Shop more than ₹.1990 to get Discount off 80% </h3></div>
        <Buttons/>
        <img style={{
            width :"80%",
            height: "400px",
            marginTop: "30px"
        }} src="https://media.istockphoto.com/photos/this-one-match-perfect-with-me-picture-id1293366109?b=1&k=20&m=1293366109&s=170667a&w=0&h=2z_h2WlM3291IRKFXrdmtObnCt93rNNdNN6mqvnKD1I=" alt=""/> <br />

        <div id = "circle">
            <img className="round" src="https://m.media-amazon.com/images/I/61Vda9gxuIL._UX569_.jpg" alt=""/>
            <img className="round" src="https://m.media-amazon.com/images/I/715gSUR3r5L._UL1425_.jpg" alt=""/>
            <img className="round" src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            <img className="round" src="https://images.unsplash.com/photo-1615397587950-3cbb55f95b77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG9vZGllfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=""/>
            <img className="round" src="https://i.pinimg.com/originals/6b/a7/04/6ba70493dade489fcff857f47e3b7fc1.jpg" alt=""/>
            <img className="round" src="https://5.imimg.com/data5/HD/IF/MY-7428235/wedding-suit-500x500.jpg" alt=""/>
            <img className="round" src="https://i.pinimg.com/474x/80/dc/94/80dc94a551d4a825a3256e87a46f649d--party-wear-blazers-mens-party-wear.jpg" alt=""/>
            <img className="round" src="https://i.pinimg.com/236x/7f/3d/02/7f3d0240839ec2fd54c09d449ea8b67d.jpg" alt=""/>
            <img className="round" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1575405804-2d-1575405799.jpg" alt=""/>
        </div>

        <img style={{
            width :"80%",
            height: "400px",
            marginTop: "30px"
        }} src="https://previews.123rf.com/images/stillab/stillab1709/stillab170900011/86097400-flat-lay-men-s-fashion-casual-outfits-and-accessories-on-white-wooden-background.jpg" alt =""/> <br />
        <img style={{
            width :"80%",
            height: "400px",
            marginTop: "30px"
        }} src="https://media.istockphoto.com/photos/mens-suits-on-hangers-in-different-colors-picture-id887360960?k=20&m=887360960&s=612x612&w=0&h=N0k2yX9noV6kNgpmKbcSXaLOl2x8Mbt_lyppAmfhNcA=" alt=""/>

        <Footer/>
        </>
    )
}