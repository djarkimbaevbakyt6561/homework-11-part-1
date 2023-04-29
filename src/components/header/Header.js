import styled from "styled-components"
import React, { useContext } from "react"
import { Button } from "../UI/Button"
import { UsersContext } from "../../contexts/UsersContext"
import { AuthContext } from "../../contexts/AuthContext"

export const Header = () => {
    const userContext = useContext(UsersContext)
    const { userOpenHandler, userCloseHandler, } = userContext
    const authContext = useContext(AuthContext)
    const { logOutHandler, isLogin } = authContext
    return (
        <HeaderContainer>
            {isLogin && (
                <ButtonContainer>
                    <Button onClick={userCloseHandler}>Expenses</Button>
                    <Button onClick={userOpenHandler}>Users</Button>
                    <Button onClick={logOutHandler}>Logout</Button>
                </ButtonContainer>
            )}
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
 background-color: #CC99FF;
 width: 100%;
 height: 70px;
 display: flex;
 align-items: center;
 justify-content: flex-end;
`
const ButtonContainer = styled.div`
 width: 300px;
 display: flex;
 justify-content: space-between;
 margin-right: 15px;
`