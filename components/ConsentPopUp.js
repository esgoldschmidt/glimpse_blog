import CookieConsent from "react-cookie-consent";
import { Link } from "next/link";


const ConsentPopUp = () => {
  return (
    <CookieConsent
    cookieName="CookieConsent"
    buttonText="Accept"
    expires={90}
    style={{ 
      display: "flex",
      padding: "0 2vw",
      justifyContent: "center",
      alignItems: "center",
      background: "#dfdfdf",
    }}
    buttonStyle={{ 
      color: "#f3f3f3", 
      backgroundColor: "#00699B", 
      fontSize: "14px",
      padding: "0.6rem",
      borderRadius: "5px",
    }}
    >
      <p className='text-gray-500'>This site uses cookies to deliver our services. By using our site, you acknowledge that you have read and understand our <a href="/privacy" style={{color: "#00699B", textDecoration: "none"}}>Terms of Service and Cookie Policy</a>. Your use of Post Reality's Products and Services, is subject to these policies and terms.</p>
    </CookieConsent>
  )
}

export default ConsentPopUp;