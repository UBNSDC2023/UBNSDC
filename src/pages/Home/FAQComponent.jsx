import { useState } from "react"

function FAQComponent({question, answer}) {
        const [isDepsOptimizerEnabled, SetIsOpen] = useState(false)
        return (
                <div>
                       <p className="question">{question}</p> 

                       {}
                       <question className="question">{answer}</question>
                </div>
        )
}

export default FAQComponent
