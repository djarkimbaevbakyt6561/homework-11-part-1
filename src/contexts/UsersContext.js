import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UsersContext = createContext({
    usersObject: {},
    showUsers: false
})
const UsersProvider = (props) => {
    const userFromLocal = localStorage.getItem('Users')
    const userArray = userFromLocal ? JSON.parse(userFromLocal) : [];
    const [showUsers, setShowUsers] = useState(false)
    const [usersObject, setUsersObject] = useState(userArray)
    const addNewUserHandler = (userData) => {
        setUsersObject([...usersObject, userData])

    }
    useEffect(() => {
        localStorage.setItem("Users", JSON.stringify(usersObject));
    }, [usersObject]);
    function userOpenHandler() {
        setShowUsers(true)
    }
    function userCloseHandler() {
        setShowUsers(false)
    }
    const initState = {
        usersObject,
        addNewUserHandler,
        showUsers,
        userOpenHandler,
        userCloseHandler
    }
    return (<UsersContext.Provider value={initState}>
        {props.children}
    </UsersContext.Provider>)
}
export default UsersProvider