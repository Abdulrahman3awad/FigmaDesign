import comket from "../../dependencies/comket.js";

export default function Main() {
    let container = comket.div({
        class: "main", children: [
            comket.div({class: "summary", children: [
                comket.img({src: "./media/logo-dark.svg"}),
                comket.p({
                    text: "Top learning experiences that create more talent in the world."
                })
            ]}),
            comket.div({class: "links", children: [
                comket.div({class: "product", children: [
                    comket.h5({text: "Product"}),
                    comket.div({children: [
                        comket.a({href: "#", text: "Overview"}),
                        comket.a({href: "#", text: "Features"}),
                        comket.a({href: "#", text: "Solutions"}),
                        comket.a({href: "#", text: "Tutorials"}),
                        comket.a({href: "#", text: "Pricing"})
                    ]})
                ]}),
                comket.div({class: "company", children: [
                    comket.h5({text: "Company"}),
                    comket.div({children: [
                        comket.a({href: "#", text: "About us"}),
                        comket.a({href: "#", text: "Careers"}),
                        comket.a({class: "new", href: "#", text: "Press"}),
                        comket.a({href: "#", text: "News"}),
                        comket.a({href: "#", text: "Pricing"})
                    ]})
                ]}),
                comket.div({class: "social", children: [
                    comket.h5({text: "Social"}),
                    comket.div({children: [
                        comket.a({href: "#", text: "Twitter"}),
                        comket.a({href: "#", text: "LinkedIn"}),
                        comket.a({href: "#", text: "GitHub"}),
                        comket.a({href: "#", text: "Dribbble"}),
                        comket.a({href: "#", text: "Facebook"})
                    ]})
                ]}),
                comket.div({class: "legal", children: [
                    comket.h5({text: "Legal"}),
                    comket.div({children: [
                        comket.a({href: "#", text: "Terms"}),
                        comket.a({href: "#", text: "Privacy"}),
                        comket.a({href: "#", text: "Cookies"}),
                        comket.a({href: "#", text: "Contact"})
                    ]})
                ]})
            ]})
        ]
    })
    return container
}
    