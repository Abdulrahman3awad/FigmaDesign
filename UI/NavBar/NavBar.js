import comket from "../dependencies/comket.js"
import Search from "./Componantes/Search.js"
import MenuBtns from "./Componantes/MenuBtns.js"
import Buttons from "./Componantes/Buttons.js"

export default function NavBar(){
    let navBar = comket.div({
        class:"navBar",
        children:[
            comket.img({src:"./media/logo-light.svg"}),
            Search(),
            MenuBtns(),
            Buttons(),
            comket.Element("ion-icon",{name:"menu", class:"menuBtn"})

        ]
    })
    return navBar
}
