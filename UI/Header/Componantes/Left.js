import comket from "../../dependencies/comket.js"

export default function Left(){
    let container = comket.div({
        class:"left",
        children:[
            comket.h1({
                children:[
                    comket.span({text: "Up Your"}),
                    comket.mark({text: " Skills"}),
                    comket.br(),
                    comket.span({text: " To"}),
                    comket.mark({text: " Advance"}),
                    comket.span({text: " Your"}),
                    comket.br(),
                    comket.mark({text: " Career"}),
                    comket.span({text: " Path"}),
                ]
            }),
            comket.p({text:"Provides you with the latest online learning system and material that help your knowledge growing."}),
            comket.div({
                class:"btns",
                children:[
                    comket.button({text:"Get Started"}),
                    comket.button({text:"Get free trial"}),
                ]
            }),
            comket.div({
                class:"features",
                children:[
                    comket.div({
                        children:[
                            comket.img({src:"./media/header/public-speaking.svg"}),
                            comket.span({text:"Public Speaking"})
                        ]
                    }),
                    comket.div({
                        children:[
                            comket.img({src:"./media/header/career-oriented.svg"}),
                            comket.span({text:"Career Oriented"})
                        ]
                    }),
                    comket.div({
                        children:[
                            comket.img({src:"./media/header/creative-thinking.svg"}),
                            comket.span({text:"Creative Thinking"})
                        ]
                    }),
                ]
            })
        ]
    })
    return container
}