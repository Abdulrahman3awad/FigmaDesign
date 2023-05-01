import comket from "../../dependencies/comket.js"

export default function Search() {
    let search = comket.div({
        class:"searchBar",
        children:[
            comket.Element("ion-icon",{name: "search"}),
            comket.input({type:"text", placeholder:"Want to learn?"}),
            comket.button({children:["Explore", comket.Element("ion-icon",{name:"chevron-down-outline"})]})
        ]
    })
    return search
}