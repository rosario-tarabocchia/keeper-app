import React from "react";

function Footer(){
    let year = new Date().getFullYear();
  
  return (
    <div>
        <footer className="footer">
        <p>Copyright © {year}</p>
        </footer>
    </div>)
}

export default Footer;