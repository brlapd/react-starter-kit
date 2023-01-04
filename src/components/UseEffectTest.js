import { useState } from "react";
import Test from "./Test";

function UseEffectTest() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(show => !show)}>
                {show ? 'Gizle' : 'Göster'}
            </button>
            <Test />
        </>
    )
}

export default UseEffectTest;