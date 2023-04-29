import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
    isLogin: false,
})

function AuthProvider(props) {
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        const localIsLogin = localStorage.getItem('Auth')
        setIsLogin(localIsLogin)
    }, [isLogin])
    function loginHandler() {
        setIsLogin(true)
        localStorage.setItem('Auth', !isLogin)
    }
    function logOutHandler() {
        setIsLogin(false)
        localStorage.removeItem("Auth")
    }
    const initState = {
        loginHandler,
        logOutHandler,
        isLogin,
    }
    return (
        <AuthContext.Provider value={initState}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthProvider 