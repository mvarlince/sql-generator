interface codeDisplayProps {
    code: string
    spinner: boolean
}

export default function CodeDisplay({ code, spinner }: codeDisplayProps) {
    return (
        <>
            <div className="code-display">
                <div className="buttons">
                    <div className="button first"></div>
                    <div className="button middle"></div>
                    <div className="button last"></div>
                </div>
                <div className="code-output">
                {spinner ? <div className="lds-dual-ring"></div> : 
                    <p> {code} </p>
               } 
               </div>
            </div>
        </>
    )
}