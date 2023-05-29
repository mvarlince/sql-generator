interface codeDisplayProps {
    code: string
}

export default function CodeDisplay({code} : codeDisplayProps) {
    return (
        <>
        <div className="code-display">
            <div className="buttons">
                <div className="button first"></div>
                <div className="button middle"></div>
                <div className="button last"></div>
            </div>
            <div className="code-output">
                <p> {code} </p>
            </div>
        </div>
        </>
    )
}