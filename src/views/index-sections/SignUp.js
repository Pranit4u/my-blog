import React from 'react'
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import Notifications from "./Notifications";
import emailjs from '@emailjs/browser';

// reactstrap components
import {
  // Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";

// core components


const SignUp = () => {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [message, setMessage] = React.useState({
    email: "",
    content: "",
    firstName: "",
    lastName: ""
  })
  

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    
    emailjs.send('service_zyn3zgg', 'template_kv0rjuh', message, 'bW-f6sRQH40mqrH0D')
      .then((result) => {
        alert("Email Sent")
      }, (error) => {
        alert("Email Not Sent")
      });
    setMessage({ email: "", firstName: "", lastName: "", content: "" })
  };

  const handleChange = e => {
    const { name, value } = e.target
    setMessage({
      ...message,//spread operator 
      [name]: value
    })

  }
  // const sendMessage = (e) => {

  //   if (message.firstName.length === 0 || message.lastName.length === 0 || message.email.length === 0 || message.content.length === 0) {
  //     return;
  //   }

  //   const obj = {
  //     "firstName": message.firstName,
  //     "lastName": message.lastName,
  //     "email": message.email,
  //     "content": message.content
  //   }

  //   axios.post("https://spring-green-peacock-veil.cyclic.app/sendMessage/send", obj)
  //     .then(res => {
  //       const r = res.data.message;
  //       switch (r) {
  //         case "1":
  //           alert("Message is sent.")
  //           break;
  //         default:
  //           alert("Something went wrong")
  //           break;

  //       }
  //     })
  //     .catch((e) => {
  //       alert("Error in server :(")
  //       console.log("error catch ->" + e)
  //     })
  //   setMessage({ email: "", firstName: "", lastName: "", content: "" })
  // }

  return (
    <>
      <div
        id="contact-me"
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px"
        }}
      >
        <Container>
          <Row>
            <Card className="card-signup" data-background-color="blue">
              <Form className="form" onSubmit={sendEmail}>
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <InputGroup
                    className={
                      "no-border" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      onChange={handleChange}
                      value={message.firstName}
                      name="firstName"
                      placeholder="First Name..."
                      type="text"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (lastFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      onChange={handleChange}
                      value={message.lastName}
                      name="lastName"
                      placeholder="Last Name..."
                      type="text"
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (emailFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      onChange={handleChange}
                      value={message.email}
                      name="email"
                      placeholder="Your Email..."
                      type="text"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_send"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      onChange={handleChange}
                      value={message.content}
                      name="content"
                      placeholder="Message..."
                      type="text"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                </CardBody>
                <CardFooter className="text-center">
                  <Input type="submit" value="Send" className="btn-neutral btn-round"
                    color="info" style={{ width: 100, position: "relative", left: "50%", transform: "translate(-50%, -50%)" }}
                  />

                  {/* <Button
                    className="btn-neutral btn-round"
                    color="info"
                    onClick={sendMessage}
                    size="lg"
                  >
                    Send Message
                  </Button> */}
                </CardFooter>
              </Form>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );

}


export default SignUp;
