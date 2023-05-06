import comket from "../../dependencies/comket.js"

export default function Testimonial(testimonial) {
    let imageName = testimonial.username.replaceAll(" ", "-").toLowerCase()
    let container = comket.div({
        class: "testimonial-card swiper-slide", children :[
            comket.img({src: "./media/logo-light.svg"}),
            comket.h5({text: testimonial.feedback}),
            comket.img({
                class: "user-image",
                src: `./media/testimonials/${imageName}.png`
            }),
            comket.p({text: testimonial.username}),
            comket.span({text: testimonial.subtitle})
        ]
    })
    return container
}