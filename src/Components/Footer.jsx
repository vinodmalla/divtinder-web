import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded bottom-0 p-10">
  <nav className="grid grid-flow-col gap-4">
    <Link to="/connections" className="link link-hover">Connections</Link>
    <Link to="/request" className="link link-hover">Requests</Link>
    <Link to="/PrivacyPolicy" className='link link-hover'>Privacy-Policy</Link>
    <Link to="/TermsAndConditions" className='link link-hover'>TermsAndConditions</Link>
    <Link to="/RefundPolicy" className='link link-hover'>RefundPolicy</Link>
  </nav>
 
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by DivTinder Ltd</p>
  </aside>
</footer>
      
    </>
  )
}

export default Footer
