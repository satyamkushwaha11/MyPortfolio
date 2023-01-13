import React, { createContext, useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";

export const UserContext = createContext();

function App() {
  const [color, setColor] = useState("text-red");
  const [text, setText] = useState("Hellow World");
  const [icon,setIcon]=useState("")
  const [page,setPage]=useState(0)

  const handelCancelPage=()=>{
    setColor("text-red")
    setText("Hello World")
    setIcon("")
    setPage(0)
  }  

  return (
    <UserContext.Provider value={{ color, setColor,text, setText,icon,setIcon,page,setPage,handelCancelPage}}>
      <div className="App p-md-4 p-0">
        <Layout>
          <MainPage ></MainPage>
        </Layout>
      </div>
    </UserContext.Provider>
  );
}

export default App;
