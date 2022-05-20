import { IFormSetStates } from '../../../../context/ContextFormsProvider/types'
import { Api } from '../../../../services/api'



export async function handleSubmit(e: React.FormEvent<HTMLFormElement>, message: string, name: string, email: string, setIsLoading: IFormSetStates['setIsLoading'], setIsRequestDone: IFormSetStates['setIsRequestDone'], arrayOfContacts: IFormSetStates['arrayOfContacts'], setContacts: IFormSetStates['setContacts'] ) {
    e.preventDefault()
    setIsLoading(true)
    arrayOfContacts = []
    const allClients: NodeListOf<HTMLInputElement> = document.getElementsByName('client') as NodeListOf<HTMLInputElement>
    const allWhatsappNumbers: NodeListOf<HTMLInputElement> = document.getElementsByName('whatsapp') as NodeListOf<HTMLInputElement>
    for (let i = 0; i < allClients.length; i++){
        const client = allClients[i].value
        const whatsapp = allWhatsappNumbers[i].value
        const idClient = allClients[i].id
        const idWhatsapp = allWhatsappNumbers[i].id
        try {
            const post = await Api.post('api/blip/defaultNotification', {
                "nomeAgente": name,
                "emailAgente": email,
                "cliente": client,
                "whatsapp": whatsapp,
                "mensagem": message
            })
            if (post.data.status == "success"){
                console.log(post.data)
                arrayOfContacts.push({idClient, idWhatsapp, client, whatsapp, status: 'success'})
            }
            else {
                console.log(post.data)
                const err = post.data.message
                const errDesc = post.data.description
                arrayOfContacts.push({idClient, idWhatsapp, client, whatsapp, status: 'error', response: {message: err, description: errDesc}})
            }
        }
        catch (err){
            console.log(err)
        }
    }
    setContacts(arrayOfContacts)
    setIsLoading(false)
    setIsRequestDone(true)
    console.log(arrayOfContacts)
}

export function addContact(contacts: HTMLElement, id: number){
    const newContacts = document.createElement('div')
    newContacts.setAttribute('class', 'flex items-center')
    newContacts.innerHTML = `<input required type="text" name="client" id='idClient${id+1}' placeholder="Cliente" required class="mx-auto w-[47%] h-12 border-2 text-xl rounded-md p-3 shadow-lg" onclick="() => document.getElementById('idClient${id+1}')!.classList.remove('ring-4', 'text-red-600', 'ring-red', 'ring-red-600')" />
    <input required type="number" maxLength={11} name="whatsapp" id='idWhatsapp${id+1}' placeholder="Whatsapp" required class="mx-auto w-[47%] h-12 border-2 text-xl rounded-md p-3 shadow-lg" onclick="() => document.getElementById('idWhatsapp${id+1}')!.classList.remove('ring-4', 'text-red-600', 'ring-red', 'ring-red-600')" />`
    contacts.appendChild(newContacts) 
}

export function removeContact(contacts: HTMLElement){
    contacts.removeChild(contacts.lastChild as HTMLElement)
}