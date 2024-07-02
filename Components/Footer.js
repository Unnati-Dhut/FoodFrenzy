// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By Unnati Dhut
      <i className="fa-solid fa-heart"></i>
     
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Food<span>Frenzy</span>
      </strong>
    </div>
  );
};

export default Footer;
