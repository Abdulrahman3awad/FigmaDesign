import comket from "../../dependencies/comket.js"

export default function MenuBtns() {
    let btns = comket.div({
        class:"menuBtns",
        children:[
            comket.a({text:"Program", href:"#"}),
            comket.a({text:"Enterprise", href:"#"}),
            comket.a({text:"Universities", href:"#"}),
        ]
    })
    return btns
}