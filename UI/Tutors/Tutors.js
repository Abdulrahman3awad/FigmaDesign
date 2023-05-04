import comket from "../dependencies/comket.js";
import Tutor from "./Componantes/Tutor.js";
import tutors from "../../database/tutors.js";

export default function Tutors(){
    let cards = []
    tutors.forEach((obj)=>{cards.push(Tutor(obj)) })
    let container = comket.div({
        class:"tutors",
        children:[
            comket.div({
                class:"top",
                children:[
                    comket.h6({text:"Tutors"}),
                    comket.h3({text:"Meet the Heroes"}),
                    comket.p({text:"On Ed-Circle, instructors from all over the world instruct millions of students. We offer the knowledge and abilities."}),
                ]
            }),
            comket.div({
                class:"tutorCards",
                children: cards
            })
        ]
    })
    return container
}