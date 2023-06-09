import { useState } from 'react';
import CodeDisplay from './components/CodeDisplay';
import MessagesDisplay from './components/MessagesDisplay';
import Header from './components/Header';
// import 'bootstrap/dist/css/bootstrap.min.css'

interface ChatData {
  role: string,
  content: string
}

function App() {

  const [value, setValue] = useState<string>("")
  const [chat, setChat] = useState<ChatData[]>([])
  const [toggle, setToggle] = useState<boolean>(false)

  const getQuery = async () => {
    setToggle(true)
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: value
        })
      }

      const response = await fetch("https://sentimental-genie-api.web.app/sql", options)
      const data = await response.json()

      const userMessage = {
        role: "user",
        content: value
      }
      setChat(oldChat => [...oldChat, data, userMessage])
      setToggle(false)
    } catch (error) {
      console.error(error)
    }
  }

  const clearChat = () => {
    setValue("")
    setChat([])
  }

  const filteredUserMessages = chat.filter(message => message.role === "user")
  const filteredAssistantMessage = chat.filter(message => message.role === "assistant").pop()

  return (
    <div className="app">
      <Header />
      <MessagesDisplay userMessages={filteredUserMessages}/>
      <input placeholder='Example: create a table users and add two users' 
              value={value} 
              onChange={e => setValue(e.target.value)}/>
      <CodeDisplay spinner={toggle} code={filteredAssistantMessage?.content || ""}/>
      <div className="button-container">
        <button id="get-query" onClick={getQuery}> Get Query </button>
        <button id="clear-chat" onClick={clearChat}> Clear Chat </button>
      </div>
    </div>

  )
}

export default App;
