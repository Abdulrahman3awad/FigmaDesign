import comket from "../../dependencies/comket.js";

export default function Service(object){
    let imgTitle = (object.title).toLowerCase().split(" ").join("-");
    let card = comket.div({
        class:"serviceCard",
        children:[
            comket.div({ class: "top", children: [
                comket.div({
                    style: { backgroundColor: object.shade },
                    children: [
                        comket.img({src: `./media/services/${imgTitle}.svg`})
                    ]
                }),
                comket.span({text: object.title})
            ]}),
            comket.p({text: object.description}),
            comket.button({children: [
                comket.span({text: "Learn More"}),
                comket.Element("ion-icon", {name: "chevron-forward"})
            ]})
        ]
    })
    return card
}