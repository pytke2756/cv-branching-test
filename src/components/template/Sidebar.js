import "../../styles/template/sidebar/Sidebar.scss";
import image from "../../assets/images/test.jpg"
const Sidebar = () => {
  return (
    <>
      <div className="side-bar">
        <div className="image">
          <img src={image} alt="profile_picture" />
        </div>
        <div className="personal-details">
          <h2>Personal Details</h2>
          <span><h3>Name</h3></span>
          <p>John Doe</p>
          <h3><b>Address</b></h3>
          <p>Sárfű utca 3</p>
          <h3><b>Phone number</b></h3>
          <p>+36 30 303 3030</p>
          <h3><b>Email.address</b></h3>
          <p>john.doe@gmail.com</p>
        </div>
        <div className="interests">
          <h2>Interests</h2>
          <p>Sports</p>
          <p>Cooking</p>
          <p>Reading</p>
        </div>
        <div className="languages">
          <h2>Languages</h2>
          <p>English</p>
          <p>German</p>
          <p>Hungaryan</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
