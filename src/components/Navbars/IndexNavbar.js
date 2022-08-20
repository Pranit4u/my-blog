import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  // Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              target="_blank"
              id="navbar-brand"
            >
              Pranit Foo
            </NavbarBrand>
            
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("home-page")
                      .scrollIntoView();
                  }}
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p>Home</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("profile-page")
                      .scrollIntoView();
                  }}
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p>About</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>Gallery</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link} onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("my-college")
                      .scrollIntoView();
                  }}>
                    {/* <i className="now-ui-icons business_chart-pie-36 mr-1"></i> */}
                    My College
                  </DropdownItem>
                  <DropdownItem
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("my-office")
                        .scrollIntoView();
                    }}
                  >
                    {/* <i className="now-ui-icons design_bullet-list-67 mr-1"></i> */}
                    My Office
                  </DropdownItem>
                  <DropdownItem
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("my-fam")
                        .scrollIntoView();
                    }}
                  >
                    {/* <i className="now-ui-icons design_bullet-list-67 mr-1"></i> */}
                    My Fam
                  </DropdownItem>
                  <DropdownItem
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("my-someone")
                        .scrollIntoView();
                    }}
                  >
                    {/* <i className="now-ui-icons design_bullet-list-67 mr-1"></i> */}
                    My Someone
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
             
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact-me")
                      .scrollIntoView();
                  }}
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p>Contact</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                <Link to={'/login-page'}>
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p>Login</p>
</Link>
                </NavLink>
              </NavItem>


              <NavItem>
                <NavLink
                  href="https://www.linkedin.com/in/pranit-deshmukh-8a4801190/"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-linkedin"></i>
                  <p className="d-lg-none d-xl-none">LinkedIn</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  My Linkedin
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/Pranit4u"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-github"></i>
                  <p className="d-lg-none d-xl-none">Github</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  My Github
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/pranitud/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  My Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
