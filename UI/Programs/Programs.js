import comket from "../dependencies/comket.js";
import Program from "./Componantes/Program.js";
import programs from "../../database/programs.js"
export default function Programs(){
    let cardsArray = []
    programs.map((obj)=>{cardsArray.push(Program(obj))})
    let container = comket.div({
        class:"programs",
        children:[
            comket.div({
                class:"top",
                children:[
                    comket.h4({text:"Explore Programs"}),
                    comket.h2({text:"Our Most Popular Class"}),
                    comket.p({text:"Let's join our famous class, the knowledge provided will definitely be useful for you."})
                ]
            }),
            comket.div({
                class:"programCards",
                children:cardsArray
            })
        ]
    })
    return container
}