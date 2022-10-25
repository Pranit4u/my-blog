import Game from 'Game';
import React, { useState } from 'react'
import {
    Input,InputGroup, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button
} from 'reactstrap'

function GameLanding() {
    const [user1, setUser1] = useState("");
    const [user2, setUser2] = useState("");
    const [goNext, setGoNext] = useState(false);
    const list = ["mrunal", "pranit", "kapil", "oshin"];
    const handleChange = e => {
        const value = e.target.value
        setUser1(value);
    }

    return (
        <div>
            
            {!goNext ?
                <div style={{ padding: 30, width: 250 }}>
                    <InputGroup>
                        <Input
                            placeholder="Enter your username..."
                            type="text"
                            value={user1}
                            onChange={handleChange}
                        ></Input>
                    </InputGroup>
                    <User2Select list={list} user2={user2} setUser2={setUser2} />
                    <Button onClick={() => setGoNext(true)} color="info" type="button">
                        Next
                    </Button>
                </div> : <Game user1={user1} user2={user2} />}
        </div>
    )
}

const User2Select = ({ list, user2, setUser2 }) => {
    return (
        <UncontrolledDropdown>
            <DropdownToggle caret>
                {user2 ? user2 : "Select a partner"}
            </DropdownToggle>
            <DropdownMenu>
                {
                    list.map((val, ind) => {
                        return (
                            <DropdownItem key={ind} onClick={() => setUser2(val)}>
                                {val}
                            </DropdownItem>
                        )
                    })
                }

            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default GameLanding