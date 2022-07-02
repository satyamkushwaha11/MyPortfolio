import React, { createContext, useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";

export const UserContext = createContext();

function App() {
  const [color, setColor] = useState("text-red");
  const [text, setText] = useState("Hellow World");
  const [icon,setIcon]=useState("")

  return (
    <UserContext.Provider value={{ color, setColor,text, setText,icon,setIcon}}>
      <div className="App p-md-4 p-0">
        <Layout>
          <MainPage></MainPage>
        </Layout>
      </div>
    </UserContext.Provider>
  );
}

export default App;
