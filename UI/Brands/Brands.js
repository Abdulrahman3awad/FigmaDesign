import comket from "../dependencies/comket.js"

export default function Brands() {
    let parent = comket.div({
        class: "brands",
        children: [
            comket.p({
                children: [
                    comket.mark({text: "250+"}),
                    comket.span({text: "Collaboration"})
                ]
            }),
            comket.img({src: "./media/brands/duolingo.svg"}),
            comket.img({src: "./media/brands/codecov.svg"}),
            comket.img({src: "./media/brands/usertesting.svg"}),
            comket.img({src: "./media/brands/magicleap.svg"}),
        ]
    })
    return parent
}