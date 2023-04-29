import { createContext,useReducer } from "react";
const initialEmailState = {
    email: '',
    emailValid: false,
    password: '',
    passwordValid: false,
}

const emailAndPasswordReducer = (state, action) => {
    if (action.type === EMAIL) {
        return {
            ...state,
            email: action.value
        }
    }
    if (action.type === PASSWORD) {
        return {
            ...state,
            password: action.value
        }
    }
    if (action.type === EMAIL_VALID) {
        return {
            ...state,
            emailValid: action.emailValue.includes("@")
        }
    }
    if (action.type === PASSWORD_VALID) {
        return {
            ...state,
            passwordValid: action.passwordValue.trim().length > 6
        }
    }
}
const EMAIL = "EMAIL"
const PASSWORD = "PASSWORD"
const EMAIL_VALID = 'EMAIL_VAlID'
const PASSWORD_VALID = 'PASSWORD_VALID'


export const LoginContext = createContext({

})

const LoginProvider = (props) => {
    const [emailAndPassword, dispatchEmailAndPassword] = useReducer(emailAndPasswordReducer, initialEmailState)
    const emailChangeHandler = (e) => {
        dispatchEmailAndPassword({ type: EMAIL, value: e.target.value })

    }
    const passwordChangeHandler = (e) => {
        dispatchEmailAndPassword({ type: PASSWORD, value: e.target.value })
    }
    const validateEmailHandler = () => {
        dispatchEmailAndPassword({ type: EMAIL_VALID, emailValue: emailAndPassword.email })
    }
    const validatePasswordHandler = () => {
        dispatchEmailAndPassword({ type: PASSWORD_VALID, passwordValue: emailAndPassword.password })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        props.onLogin(emailAndPassword.email, emailAndPassword.password)
        const user = {
            email: emailAndPassword.email,
            password: emailAndPassword.password
        }
        props.onSubmit(user)

    }
    const initStateAndFunc = {
        submitHandler,
        emailAndPassword,
        validateEmailHandler,
        validatePasswordHandler,
        passwordChangeHandler,
        emailChangeHandler
    }
    return (
        <LoginContext.Provider value={initStateAndFunc}>
            {props.children}
        </LoginContext.Provider>
    )
}
export default LoginProvider