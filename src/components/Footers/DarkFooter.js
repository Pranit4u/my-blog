/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                target="_blank"
              >
                Pranit Deshmukh
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          Designed in memory of{" "}
          <a
            target="_blank"
          >
            my wife :(
          </a>

        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
