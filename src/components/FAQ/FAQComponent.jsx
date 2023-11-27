import { useState } from "react"


function FAQComponent({question, answer}) {
        const [isopen, SetIsOpen] = useState(false)

        function handleOpen(){
                SetIsOpen(() => !isopen)
        }
        return (
                <div>
                       <p className="question">{question}</p> 
                        <button onClick={handleOpen}> Click</button>
                        {isopen ? <question className="question">{answer}</question> : "" }
                       
                </div>
        )
}

export default FAQComponent
