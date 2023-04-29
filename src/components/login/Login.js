import React, { useReducer } from "react";
import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import { LoginContext } from "../../contexts/LoginContext";
import { Button } from "../UI/Button";
import classes from './Login.module.css'




export const Login = () => {
    const context = useContext(LoginContext)
    return (
        <Form onSubmit={context.submitHandler}>
            <InputContainer className={`${context.emailAndPassword.emailValid === false ? classes.invalid : ""
                }`}>
                <Label htmlFor="email">E-Mail</Label>
                <Input value={context.emailAndPassword.email} required onBlur={context.validateEmailHandler} onChange={context.emailChangeHandler} type='email' name='email' />
            </InputContainer>
            <InputContainerTwo className={`${context.emailAndPassword.passwordValid === false ? classes.invalid : ""
                }`}>
                <Label htmlFor="password">Password</Label>
                <Input value={context.emailAndPassword.password} minLength='6' required onBlur={context.validatePasswordHandler} onChange={context.passwordChangeHandler} type='password' name='password' />
            </InputContainerTwo>
            <Button  marginTop="20px">Login</Button>
        </Form>
    )
}
const Form = styled.form`
    width: 780px;
    margin-top: 20px;
    height: 240px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 8px;
    display    :flex ;
    flex-direction: column;
    align-items: center;
`
const InputContainer = styled.div`
    width: 700px;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`
const InputContainerTwo = styled.div`
    width: 700px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const Input = styled.input`
    width: 560px;
    height: 30px;
    border-radius: 7px;
    border: 1px solid gray;
    font-size: 20px;

`
const Label = styled.label`
    font-size: 20px;
    font-weight: 600;
    color: gray;

`