import styled from "styled-components";
import React, { useContext } from "react";
import { User } from "./User";
import { UsersContext } from "../../contexts/UsersContext";

export const Users = () => {
    const context = useContext(UsersContext)
    const {usersObject} = context
    return (
        <UnorderedList>
            {usersObject.map((el) => {
                return <User email={el.email} password={el.password}></User>
            })}
        </UnorderedList>
    )
}
const UnorderedList = styled.ul`
   margin: 0;
   padding: 0;
`