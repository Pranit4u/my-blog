import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  CardFooter
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      {/* <ExamplesNavbar /> */}
      <div id="profile-page" className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <h3 className="title">About me</h3>
            <h5 className="description">
              A 4th year student, Pranit — studying in National
              Institute Of Technology Calicut. Going to join SAP Labs India pretty
              soon.
            </h5>
            <div className="text-center">
                  <Button
                    className="btn-round mr-1 btn-round"
                    color="info"
                    href="https://drive.google.com/file/d/1j1akWFqIO0GAadFvLcI4tgM9dkOQm5FX/view?usp=sharing"
                    // onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    My Resume
                  </Button>
                </div>
            {/* <Button
                className="btn-round mr-1"
                color="info"
                href="/nucleo-icons"
                size="lg"
                target="_blank"
              >
                View Demo Icons
              </Button> */}
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
