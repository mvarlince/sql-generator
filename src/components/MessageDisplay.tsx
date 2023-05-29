interface UserMessage {
    role: string,
    content: string
}

interface MessageDisplayProps {
    message: UserMessage
}

export default function MessageDisplay({message} : MessageDisplayProps){

    return (
        <>
        <div className="message-display">
            <p id="icon"> 👤 </p>
            <p> {message.content} </p>
        </div>
        </>
    )
}