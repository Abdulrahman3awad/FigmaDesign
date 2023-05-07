import comket from "../dependencies/comket.js";
import Main from "./Componantes/Main.js";
import Copyrights from "./Componantes/Copyrights.js";

export default function Footer(){
    let container = comket.div({
        class: "footer", children: [ Main(), Copyrights() ]
    })
    return container
}