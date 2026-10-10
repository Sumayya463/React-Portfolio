import React from 'react';

function Footer() {
  return (
    <section id="footer" className="footer">
      <p>
        &copy; {new Date().getFullYear()} Sumayya Fatima. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;