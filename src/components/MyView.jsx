import { useState } from "react";
import CustomButton from "./CustomButton.jsx";

const MyView = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <>
            <p>{count}</p>
            <CustomButton
                buttonTitle="Increment"
                handleClick={ handleIncrement }
            />
        </>
    );
};

export { MyView };