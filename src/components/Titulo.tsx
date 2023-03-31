import React from "react";

export default function Titulo(props) {

    return (
        <div className={`
            flex flex-col justify-center
        `}>
            <h1 className="px-5 py-2 text-2xl">{props.children}
                <hr className="border-2 border-purple-500" />
            </h1>
        </div>
    )
}