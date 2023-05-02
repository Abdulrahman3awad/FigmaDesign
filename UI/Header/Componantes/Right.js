import comket from "../../dependencies/comket.js"

function videoCard() {
    let card = comket.div({
        class: "videoCard",
        children: [
            comket.div({
                class: "img",
                children: [comket.img({ src: "./media/header/course-icon.svg" })]
            }),
            comket.div({
                class: "data",
                children: [
                    comket.h3({ text: "2K+" }),
                    comket.span({ text: "Video Courses" })
                ]
            }),
        ]
    })
    return card
}
function tutorsCard() {
    let card = comket.div({
        class: "tutorsCard",
        children: [
            comket.div({
                class: "img",
                children: [comket.img({ src: "./media/header/tutor-icon.svg" })]
            }),
            comket.div({
                class: "data",
                children: [
                    comket.span({ text: "Tutors" }),
                    comket.h3({ text: "250+" }),
                ]
            }),
        ]
    })
    return card
}
function onlineCard() {
    let card = comket.div({
        class: "onlineCard",
        children: [
            comket.img({ src: "./media/header/online-courses.svg" }),
            comket.h3({ text: "5K+" }),
            comket.span({ text: "Online Courses" })
        ]
    })
    return card
}
function image(){
    let container = comket.div({
        class:"imageContainer",
        children:[
            comket.img({src:"./media/header/main.png"})
        ]
    })
    return container
}
export default function Right(){
    return comket.div({
        class:"right",
        children:[
            videoCard(),tutorsCard(),onlineCard(),image()
        ]
    })
}