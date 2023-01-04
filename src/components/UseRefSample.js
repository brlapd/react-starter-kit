import { useRef, forwardRef } from "react"

function Input(props, ref) {
    return <input type="text" ref={ref} {...props} />
}

Input = forwardRef(Input);

function UseRefSample() {

    const inputRef = useRef();
    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <h1>useRef - forwardRef</h1>
            <Input ref={inputRef} />
            <button onClick={focusInput}>Focusla</button>
        </>
    )
}

export default UseRefSample