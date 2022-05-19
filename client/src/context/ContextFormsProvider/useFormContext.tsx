import React from "react";
import { useContext } from "react";
import { ContextForms } from ".";


export default function useFormContext(){
    const context = useContext(ContextForms)

    return context
}