import comket from "../../dependencies/comket.js"

export default function Buttons(){
    let buttons = comket.div({
        class:"buttons",
        children:[
            comket.button({text:"Sign in"}),
            comket.button({text:"Create free account"}),
        ]
    })
    return buttons
}