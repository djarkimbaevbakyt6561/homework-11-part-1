import "./App.css";
import { NewExpense } from "./components/newExpense/NewExpense"
import { Expenses } from "./components/expenses/Expenses";
import { useState } from "react";
import { useRef } from "react";
import { Header } from "./components/header/Header";
import { Login } from "./components/login/Login";
import { useEffect } from "react";
import { Users } from "./components/users/Users";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { ProductContext } from "./contexts/ProductContext";
import { UsersContext } from "./contexts/UsersContext";
import NewExpenseProvider from "./contexts/NewExpenseContext";
import LoginProvider from "./contexts/LoginContext";
import ExpensesProvider from "./contexts/ExpensesContext";

function App() {
  const authContext = useContext(AuthContext)
  const productContext = useContext(ProductContext)
  const usersContext = useContext(UsersContext)
  return (
    <div className="App">
      <Header/>
      <>
        {authContext.isLogin ? (
          <>
            <>
              {usersContext.showUsers ? (<Users/>) : (
                <div>
                  <NewExpenseProvider>
                    <NewExpense/>
                  </NewExpenseProvider>
                  <ExpensesProvider>
                    <Expenses/>
                  </ExpensesProvider>
                </div>
              )}

            </>
          </>
        ) : (
          <LoginProvider>
            <Login />
          </LoginProvider>
        )}
      </>
    </div>
  );
}

export default App;