import comket from "../../dependencies/comket.js"



function time(timeData) {
    let h = "";
    let m = "";
    let s = "";
    timeData.split(":").map((item, index) => {
        if (index === 0) { h += `${item} hr` }
        else if (index === 1) { m += `${item} mins` }
        else if (index === 2 && item != "00") { s += `${item} s` }
    })
    return h + " " + m + " " + s
}
export default function Program(program) {
    let imageCoverTitle = (program.title).toLowerCase().split(" ").join("-")
    let leaderImage = (program.leader.name).toLowerCase().split(" ").join("-")
    let card = comket.div({
        class: "programCard",
        children: [
            comket.span({
                class: "time",
                children: [
                    comket.Element("ion-icon", { name: "time-outline" }),
                    comket.mark({ text: program.time })
                ]
            }),
            comket.img({
                class: "imageProgram",
                src: `./media/programs/${imageCoverTitle}.png`
            }),
            comket.div({
                class: "contant",
                children: [
                    comket.h6({ text: program.category }),
                    comket.h5({ children: [comket.span({ text: program.title }), comket.Element("ion-icon", { name: "arrow-up-outline" })] }),
                    comket.p({ text: program.description }),
                    comket.div({
                        class: "containerRate",
                        children:[
                            comket.span({text:program.rate}),
                            comket.div({
                                class:"rate",
                                children:[
                                    comket.div({class:"value", style:{width: `${(program.rate / 5) * 100}%`}}),
                                    comket.div({
                                        class:"stars",
                                        children:[
                                            comket.Element("ion-icon",{name:"star"}),
                                            comket.Element("ion-icon",{name:"star"}),
                                            comket.Element("ion-icon",{name:"star"}),
                                            comket.Element("ion-icon",{name:"star"}),
                                            comket.Element("ion-icon",{name:"star"}),
                                        ]
                                    }),
                                ]
                            }),
                            comket.mark({text: program.reviewers}),
                        ]
                    }),
                    comket.div({
                        class:"leader",
                        children:[
                            comket.img({src:`./media/programs/${leaderImage}.png`}),
                            comket.div({
                                class:"center",
                                children:[
                                    comket.p({text:program.leader.name}),
                                    comket.span({text:`${program.leader.enrolled} Enrolled`}),
                                ]
                            }),
                            comket.mark({
                                class:"price",
                                text:`$${program.price}`
                            })
                        ]
                    })

                ]
            })

        ]
    })
    return card
}