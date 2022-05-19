import { Checks, UserCircle } from "phosphor-react";
import React from "react";

export default function Preview({message, name}: {message: string, name: string}){
    
    if (message){
        return (
            <div className="w-[95%] min-w-[200px] flex items-start gap-2 my-3 ">
                <div className="bg-[#ece5dd] rounded-full">
                    <UserCircle size={32} color='#0b1f68' weight="duotone" />
                </div>
                
                    <p className='bg-[#dcf8c6] rounded-md rounded-tl-none shadow-md p-3 sm:min-w-[350px]'>
                        Olá, cliente! <br/>
                        Sou {name}, da imobiliária G3. <br/>
                        Estou entrando em contato {message}
                        <span className="flex justify-end">
                            <Checks size={20} />
                        </span>
                    </p>
            </div>
        )
    }

    return null
}