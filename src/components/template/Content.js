import "../../styles/template/content/Content.scss";
import Sidebar from "./Sidebar";
const Content = () => {
  return (
    <>
    <Sidebar></Sidebar>
      <div className="content">
        <p>content</p>
      </div>
    </>
  );
};

export default Content;
