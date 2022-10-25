import React, { useState, useEffect } from 'react';
import {
    Input, InputGroup, InputGroupAddon, InputGroupText, Row, Card, CardBody,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Button
} from 'reactstrap'
import { getDatabase, ref, set, onValue } from "firebase/database";
import axios from 'axios';

const Game = ({user1,user2}) => {
    const [genre,setGenre] = useState("Rom");
    const [questions,setQuestions] = useState([]);
    const [currQuestion,setCurrQuestion] = useState("Start the game");
    const [user1Score,setUser1Score] = useState(50);
    const [user2Score,setUser2Score] = useState(50);
    const [user1Message,setUser1Message] = useState("");
    const [user2Message,setUser2Message] = useState("");
    const [textMessage,setTextMessage] = useState("");
    const [askQuestionText,setAskQuestionText]  = useState("");
    const [fetched, setFetched] = useState(false);
    // const user1 = "pranit";
    // const user2 = "mrunal";
    const concat_str = user1<user2 ? user1+"_"+user2 : user2+"_"+user1;

    const getQuestions = async (gen) => {
        setFetched(true);
        setGenre(gen);
        const res = await axios.get('https://pranit-blog.herokuapp.com/nhie/get', {
          params: {
            genre: gen
          }
        });
        if (res.data.length !== 0) {
          setQuestions(res.data)
        } else {
          console.log("Data not Found:(");
        }
      }
      if (!fetched) {
        getQuestions(genre);
      }

    useEffect(() => {
        const db = getDatabase();
        set(ref(db,'game1/'+concat_str+'/question'),{value: "Start the game"});
        set(ref(db,'game1/'+concat_str+'/score'),{[user1]: 10, [user2]: 10});
        set(ref(db,'game1/'+concat_str+'/message'),{[user1]: "", [user2]:""});
        const questionRef = ref(db, 'game1/'+concat_str+'/question');
        onValue(questionRef, (snapshot) => {
        const data = snapshot.val();
        setCurrQuestion(data.value);
        });

        const scoreRef = ref(db, 'game1/'+concat_str+'/score');
        onValue(scoreRef, (snapshot) => {
        const data = snapshot.val();
        setUser1Score(data[user1]);
        setUser2Score(data[user2]);
        });

        const messageRef = ref(db, 'game1/'+concat_str+'/message');
        onValue(messageRef, (snapshot) => {
        const data = snapshot.val();
        setUser1Message(data[user1]);
        setUser2Message(data[user2]);
        });

    },[concat_str,user1,user2]);


    const handleChange = e => {
        const value  = e.target.value
        setTextMessage(value);
    }
    const handleChange2 = e => {
        const value  = e.target.value
        setAskQuestionText(value);
    }
    
    const sendTextMessage = () =>{
        const db = getDatabase();
        if(textMessage.length === 0){
            return;
        }
        let tm = textMessage;
        set(ref(db,'game1/'+concat_str+'/message'),{[user1]: tm, [user2]: user2Message});
        setTextMessage("");
    }

    const sendAskQuestion = () =>{
        const db = getDatabase();
        if(askQuestionText.length === 0){
            return;
        }
        let tm = askQuestionText;
        set(ref(db,'game1/'+concat_str+'/question'),{value: tm});
        setTextMessage("");
    }

    const popQuestion = () => {
        const db = getDatabase();
        if (questions.length !== 0){
            set(ref(db,'game1/'+concat_str+'/question'),{value: questions[0].question});
            set(ref(db,'game1/'+concat_str+'/message'),{[user1]:"", [user2]:""});
            questions.shift();
            setQuestions([...questions]);
        }
        else{
            setCurrQuestion("End Game")
        }
    }

    const onAnswer = (bool) => {
        const db = getDatabase();
        if(user1Score === 0){
            return;
        }
        if (bool){
            let sc = user1Score-1;
            set(ref(db,'game1/'+concat_str+'/score'),{[user1]: sc, [user2]: user2Score});
            set(ref(db,'game1/'+concat_str+'/message'),{[user1]: "I have", [user2]: user2Message});
        }
        else{
            set(ref(db,'game1/'+concat_str+'/message'),{[user1]: "I have not", [user2]: user2Message});
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <h3 style={{textAlign:'center'}}>{concat_str}</h3>
            <Row>
                <img
                    style={{ marginRight: "auto" }}
                    alt={user1}
                    className="rounded img-raised"
                    // src={require("assets/img/julie.jpg")}
                    height={50}
                    width={50}
                />
                <GenreDropDown genre={genre} getQuestions={getQuestions}/>
                <img
                    style={{ marginLeft: "auto" }}
                    alt={user2}
                    className="rounded img-raised"
                    // src={require("assets/img/julie.jpg")}
                    height={50}
                    width={50}
                />
            </Row>
            <Row>
                <b style={{ marginRight: "auto", fontSize: 25 }}>{user1Score}</b>
                <b style={{ marginLeft: "auto", fontSize: 25 }}>{user2Score}</b>
            </Row>
            <Row>
                <InputGroup style={{width:"40%", marginRight: "auto"}}>
                    <Input 
                        value={user1Message}
                        disabled
                    />
                </InputGroup>
                <InputGroup style={{width:"40%", marginLeft: "auto"}}>
                    <Input 
                        value={user2Message}
                        disabled
                        style={{ textAlign: 'end' }}
                    />
                </InputGroup>
               
            </Row>
            <QuestionCard currQuestion={currQuestion}/>
            <div style={{ textAlign: 'center' }}>
                <Button style={{ width: "40%" }} color="danger" onClick={()=>onAnswer(false)}>I have not</Button>
                <Button style={{ width: "40%" }} color="success" onClick={()=>onAnswer(true)}>I have</Button>
            </div>
            <MessageBox textMessage={textMessage} handleChange={handleChange} sendTextMessage={sendTextMessage}/>
            <AskQuestionBox askQuestionText={askQuestionText} handleChange2={handleChange2} sendAskQuestion={sendAskQuestion}/>
            <div style={{ textAlign: 'center' }}>
                <Button color="info" type="button" onClick={popQuestion}>
                    Next
                </Button>
            </div>
        </div>
    )
}




const AskQuestionBox = ({askQuestionText,handleChange2,sendAskQuestion}) => {
    return (
        <InputGroup>
            <Input
                placeholder="Ask question here..."
                type="text"
                value={askQuestionText}
                onChange={handleChange2}
            ></Input>
            <InputGroupAddon onClick={sendAskQuestion} addonType="append">
                <InputGroupText>
                    <i className="now-ui-icons ui-1_send"/>
                </InputGroupText>
            </InputGroupAddon>
        </InputGroup>
    )
}

const MessageBox = ({textMessage,handleChange,sendTextMessage}) => {
    return (
        <InputGroup>
            <Input
                placeholder="React here..."
                type="text"
                value={textMessage}
                onChange={handleChange}
            ></Input>
            <InputGroupAddon onClick={sendTextMessage} addonType="append">
                <InputGroupText>
                    <i className="now-ui-icons ui-1_send"/>
                </InputGroupText>
            </InputGroupAddon>
        </InputGroup>
    )
}


const GenreDropDown = ({genre,getQuestions}) => {
    return (
        <UncontrolledDropdown>
            <DropdownToggle caret>
                {genre}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={() => getQuestions("Fun")}>
                    Fun
                </DropdownItem>
                <DropdownItem onClick={() => getQuestions("Rom")}>
                    Rom
                </DropdownItem>
                <DropdownItem onClick={() => getQuestions("Gen")}>
                    Gen
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

const QuestionCard = ({currQuestion}) => {
    return (
        <Container style={{ textAlign: 'center', maxWidth: "50%" }}>
            <Card style={{ width: "fit-content" }}>
                <CardBody style={{ textAlign: 'center' }}>
                    {currQuestion}
                </CardBody>
            </Card>
        </Container> 
    )
}

export default Game