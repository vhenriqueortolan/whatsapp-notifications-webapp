import React, { useEffect, useState } from "react";
import useFormContext from "../../context/ContextFormsProvider/useFormContext";

export default function ResultFormAlert(){
    const contextForms = useFormContext()
    const contacts = contextForms.contacts
    
    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className= {`flex flex-col gap-6 items-center justify-center w-[80%] p-6 shadow-xl rounded-md text-white text-lg ${contacts.filter((e) => e.status === 'error').length == 0 ? 'bg-green-600' : 'bg-red-600'}`} >
                {contacts.map((e, i) => {
                    return e.status == 'error' ? <p key={ i }>
                        - O envio para <span className="font-[700]">{e.client}</span> com whatsapp número {e.whatsapp} <span className="font-[700]">falhou</span>. {e.response?.message} (error: {e.response?.description})
                    </p> : <p key={ i }>
                        - O envio para <span className="font-[700]">{e.client}</span> foi feito com sucesso!
                    </p> })}
                <button onClick={()=> {contacts.filter((e) => e.status === 'error').length > 0 ? contextForms.setIsRequestDone(false) : window.location.reload()}} className="bg-orange py-2 px-3 w-40 mt-6 rounded-md text-white font-[700] shadow-[3px_3px_15px_-5px_rgba(0,0,0,0.62)] border-blue border-opacity-25 border hover:bg-amber-700 hover:shadow-[inset_3px_3px_15px_-5px_rgba(0,0,0,0.62)] transition duration-300">Fechar</button>
            </div>
        </div>
    )
}