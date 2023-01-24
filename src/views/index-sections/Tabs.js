import React from "react";
import axios from 'axios';
// import Switch from "react-bootstrap-switch";
// plugin that creates slider
// import Slider from "nouislider";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// reactstrap components
import {
  Label,
  FormGroup,
  Input,

} from "reactstrap";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
import storage from "firebaseConfig";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  // const [pills, setPills] = React.useState("1");
  const [messages, setMessages] = React.useState([])
  const [fetched, setFetched] = React.useState(false)
  const [info, setInfo] = React.useState({ caption: "", altText: "" ,src: "", type: ""})
  const [file, setFile] = React.useState("");
  const [percent, setPercent] = React.useState(0);

  const handleChange = e => {
    const { name, value } = e.target
    setInfo({
      ...info,//spread operator 
      [name]: value
    })
  }

  const manageChange = e => {
    setFile(e.target.files[0]);
  }

  const makeChange = (e) => {
    info['type'] = e.target.value;
  }

  const uploadToFirebase = () => {

    if (info.altText.length === 0 || info.caption.length === 0 || info.type.length === 0){
      alert("Please fill all fields!");
        return;
    }

    if (!file) {
        alert("Please upload an image first!");
        return;
    }
    
    const storageRef = ref(storage, `/files/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            // update progress
            setPercent(percent);
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                info['src'] = url;
                uploadPicture();
            });
        }
    );
  };

  const uploadPicture = () => {
    axios.post("https://spring-green-peacock-veil.cyclic.app/addPicture/add", info)
            .then(res => {
                const r = res.data.message;
                switch (r) {
                    case "1":
                        alert("Picture is added")
                        break;
                    default:
                        alert("Something went wrong")
                        break;
                }
            })
            .catch((e) =>{ 
                alert("Error in server :(")
                console.log("error catch ->" + e)
            })
  }



  const getMessages = async () => {
    const res = await axios.get('https://spring-green-peacock-veil.cyclic.app/sendMessage/get', {
      params: {
      }
    });
    setFetched(true)
    // console.log(res.data)
    setMessages(res.data)
  }
  if (!fetched) {
    getMessages()
  }

  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              {/* <p className="category">Tabs with Icons on Card</p> */}
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons objects_umbrella-13"></i>
                        Messages
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <i className="now-ui-icons shopping_cart-simple"></i>
                        Photos
                      </NavLink>
                    </NavItem>
                    {/* <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        <i className="now-ui-icons shopping_shop"></i>
                        Messages
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("4");
                        }}
                      >
                        <i className="now-ui-icons ui-2_settings-90"></i>
                        Settings
                      </NavLink>
                    </NavItem> */}
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <p>
                        {messages.length === 0 ? "No Messages" :
                          <ul>
                            {messages.map((msg, index) => {
                              return (
                                <li key={index}>
                                  {msg['firstName'] + "->" + msg['content']}
                                </li>
                              )
                            })}
                          </ul>
                        }
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <Col className="mb-4" lg="3" sm="6">
                        <p className="category">Type</p>
                        <FormGroup check className="form-check-radio">
                          <Label check>
                            <Input
                              value="College"
                              id="type1"
                              name="type"
                              type="radio"
                              onChange={makeChange}
                            ></Input>
                            <span className="form-check-sign"></span>
                            My College
                          </Label>
                        </FormGroup>
                        <FormGroup check className="form-check-radio">
                          <Label check>
                            <Input
                              value="Office"
                              id="type1"
                              name="type"
                              type="radio"
                              onChange={makeChange}
                            ></Input>
                            <span className="form-check-sign"></span>
                            My Office
                          </Label>
                        </FormGroup>
                        <FormGroup check className="form-check-radio">
                          <Label check>
                            <Input
                              value="Fam"
                              id="type1"
                              name="type"
                              type="radio"
                              onChange={makeChange}
                            ></Input>
                            <span className="form-check-sign"></span>
                            My Fam
                          </Label>
                        </FormGroup>
                        <FormGroup check className="form-check-radio">
                          <Label check>
                            <Input
                              value="Someone"
                              id="type1"
                              name="type"
                              type="radio"
                              onChange={makeChange}
                            ></Input>
                            <span className="form-check-sign"></span>
                            My Someone
                          </Label>
                        </FormGroup>
                      </Col>
                      <FormGroup>
                        <Input
                          placeholder="altText"
                          value={info.altText}
                          name="altText"
                          onChange={handleChange}
                          type="text"
                        ></Input>
                      </FormGroup>
                      <FormGroup>
                        <Input
                          value={info.caption}
                          placeholder="caption"
                          onChange={handleChange}
                          name="caption"
                          type="text"
                        ></Input>
                      </FormGroup>
                      <input type="file" accept="image/*" onChange={manageChange} />
                      <button className="btn-neutral btn-round"
                        color="info"
                        onClick={uploadToFirebase}
                        size="lg">Upload to Firebase</button>
                        <p>{percent}% done</p>
                    </TabPane>

                  </TabContent>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
