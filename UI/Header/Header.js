import comket from "../dependencies/comket.js";
import Left from "./Componantes/left.js";
import Right from "./Componantes/Right.js"

export default function Header(){
    return comket.div({
        class:"header",
        children:[Left(), Right()]
    })
}