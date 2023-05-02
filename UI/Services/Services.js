import comket from "../dependencies/comket.js";
import Service from "./Componantes/Service.js";
import services from "../../database/services.js"
export default function Services(){
    let container = comket.div({
        class: "services",
        children: [
            comket.div({
                class:"top",
                children:[
                    comket.h3({text: "Our Services"}),
                    comket.h4({
                        text: "Fostering a playful & engaging learning environment"
                    }),
                ]
            }),
            comket.div({
                class: "cards",
                children: services.map(object => Service(object))
            })
        ]
    })
    return container
}