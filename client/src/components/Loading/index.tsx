import { CircleNotch, SpinnerGap } from "phosphor-react";
import React from "react";

export default function Loading(){

    return (
        <div className="flex flex-col items-center justify-center h-screen animate-spin-slow motion-reduce:animate-spin">
            <CircleNotch color="#f0731b" size={200} weight="bold" />
        </div>
    )
}