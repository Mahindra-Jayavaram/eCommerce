import "./footer.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

export const Footer = () => {
  return (
    <>
      <div id="footer-main">
          <div id="footer">
            <div className="footerDiv">
              <h3>Mens</h3>
              <p>Mens</p>
              <p>Shirts</p>
              <p>Jeans</p>
              <p>Kurta</p>
            </div>
            <div className="footerDiv">
              <h3>Womens</h3>
              <p>Womens</p>
              <p>Party were</p>
              <p>Lehanga</p>
              <p>Sarees</p>
            </div>
            <div className="footerDiv">
              <h3>Kids</h3>
              <p>Kids</p>
              <p>Dresses</p>
              <p>Suits</p>
              <p>Traditional</p>
            </div>
            <div className="footerDiv">
              <h3>Baby</h3>
              <p>Kids</p>
              <p>Dresses</p>
              <p>Suits</p>
              <p>Traditional</p>
            </div>
            <div className="footerDiv">
              <h3>Policies</h3>
              <p>Return Policy</p>
              <p>Social media</p>
              <p>Terms&conditions</p>
              <p>Log In</p>
            </div>
          </div>
        <div id="icons">
            <InstagramIcon class = "social-media"/>
            <FacebookIcon class = "social-media"/>
            <TwitterIcon class = "social-media"/>
            <YouTubeIcon class = "social-media"/>
        </div>

        <div id="brandLogo">
            <img src="https://logos.textgiraffe.com/logos/logo-name/Mahendra-designstyle-colors-m.png" alt="" />
            <p>Copyrights@2022 || India Rs.</p>
        </div>
      </div>
    </>
  );
};
