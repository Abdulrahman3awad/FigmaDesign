import comket from "../../dependencies/comket.js"

export default function Tutor(tutorData){
    let imageTitle = (tutorData.name).toLowerCase().split(" ").join("-");
    let card = comket.div({
        class:"tutorCard",
        children:[
            comket.img({src:`./media/tutors/${imageTitle}.png`}),
            comket.h4({text: tutorData.name}),
            comket.span({text: tutorData.subtitle}),
            comket.p({text: tutorData.summary}),
            comket.div({
                class:"websites",
                children: [ 
                    comket.a({href: `https://twitter.com/${tutorData.twitter}`, children: [comket.Element("ion-icon",{name:"logo-twitter"})]}),
                    comket.a({href: `https://linkedin.com/${tutorData.linkedin}`, children: [comket.Element("ion-icon",{name:"logo-linkedin"})]}),
                ]
            })
        ]
    })
    return card
}