import React, { useEffect, useState } from "react";
import { useAuth } from "../../../../context/AuthProvider/useAuth";
import useFormContext from "../../../../context/ContextFormsProvider/useFormContext";
import Preview from "./Preview";
import { addContact, handleSubmit, removeContact } from "./utils";

export default function DefaultForm(){
    const [message, setMessage] = useState<string>('')
    const [id, setId] = useState(0)
    const contacts = document.getElementById('contacts') as HTMLElement
    const contextForms = useFormContext()
    const contextAuth = useAuth()
    const setContacts = contextForms.setContacts
    const name = contextAuth.name
    const email = contextAuth.email

    useEffect(()=>{
        contextForms.contacts.map(e => {
            if(e.status == 'error'){
                document.getElementById(e.idClient)!.classList.add('ring-4', 'text-red-600', 'ring-red', 'ring-red-600')
                document.getElementById(e.idWhatsapp)!.classList.add('ring-4', 'text-red-600', 'ring-red', 'ring-red-600')
            }else {
                document.getElementById(e.idClient)!.className = 'hidden'
                document.getElementById(e.idWhatsapp)!.className = 'hidden'
            } 
        })
    }, [contextForms.contacts])

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e, message, name!, email!, contextForms.setIsLoading, contextForms.setIsRequestDone, contextForms.arrayOfContacts, setContacts)} className="flex flex-col gap-3 items-center w-[100%] sm:w-[80%] max-w-xl py-6 mx-auto rounded-md ">
                <input type="hidden" name="name" value={name} />
                <input type="hidden" name="email" value={email}/>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" maxLength={40} placeholder='Estou entrando em contato para...' required className="w-[95%] border-2 text-xl rounded-md mt-6 p-3 shadow-lg resize-none overflow-hidden h-28" rows={10}></textarea>
                <div className="flex items-center">{<Preview message={message} name={name!} />}</div>
                <div id="contacts" className="flex flex-col items-center justify-items-center gap-3">
                    <div className="flex items-center">
                        <input type="text" name="client" id="idClient0" placeholder="Cliente" required className='mx-auto w-[47%] h-12 border-2 text-xl rounded-md p-3 shadow-lg ' onClick={() => document.getElementById('idClient0')!.classList.remove('ring-4', 'text-red-600', 'ring-red', 'ring-red-600')} />
                        <input type="number" maxLength={11} name="whatsapp" id="idWhatsapp0" placeholder="Whatsapp" required className="mx-auto w-[47%] h-12 border-2 text-xl rounded-md p-3 shadow-lg" onClick={() => document.getElementById('idWhatsapp0')!.classList.remove('ring-4', 'text-red-600', 'ring-red', 'ring-red-600')} />
                    </div>
                </div>
                <div className="mt-6 flex items-center gap-3">
                    <input key={2} required type='button' onClick={() => {setId(id+1); addContact(contacts, id)}} value='Adicionar' className="inline bg-slate-800 py-2 px-3 rounded-md text-white shadow-md hover:shadow-inner hover:bg-slate-600 transition duration-500 cursor-pointer" />
                    <input required type='button' onClick={() => {removeContact(contacts)}} value='Remover' className="inline bg-slate-800 py-2 px-3 rounded-md text-white shadow-md hover:shadow-inner hover:bg-slate-600 transition duration-500 cursor-pointer"/>
                </div>
                <button type="submit" className="bg-orange py-2 px-3 w-40 rounded-md text-white font-[700] shadow-[3px_3px_15px_-5px_rgba(0,0,0,0.62)] border-blue border-opacity-25 border hover:bg-amber-700 hover:shadow-[inset_3px_3px_15px_-5px_rgba(0,0,0,0.62)] transition duration-300"><span>Enviar</span></button>
            </form>
            
        </>
    )
}