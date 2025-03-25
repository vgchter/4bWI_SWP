import { useState } from "react";
import { useBearStore } from "../utils/store/useBearStore";

export default function Button({ title, description }) {
    const [amountOfClicks, setAmountOfClicks] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    let style = amountOfClicks > 3 ? "bg-red-200" : "bg-green-400";
    let hoverStyle =
        amountOfClicks > 3 ? "hover:bg-red-400" : "hover:bg-green-600";
    let random = Math.random();

    return (
        <div
            className={`${style} ${hoverStyle} p-2 hover:cursor-pointer`}
            onClick={() => {
                setAmountOfClicks(amountOfClicks + 1);
                setIsOpen(!isOpen);
            }}
        >
            <div className="font-bold ">
                {" "}
                {title}
                {bears}
            </div>
            <img src={"https://picsum.photos/200/300?random=" + random} />

            <p>Amount of clicks:{amountOfClicks}</p>
            {isOpen && <div>{description}</div>}
        </div>
    );
}