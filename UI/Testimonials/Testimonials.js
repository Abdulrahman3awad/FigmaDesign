import comket from "../dependencies/comket.js"
import Testimonial from "./Componantes/Testimonial.js"
import testimonials from "../../database/testimonials.js"

export default function Testimonials() {
    let container = comket.div({
        class: "testimonials swiper", children: [
            comket.div({
                class: "cards swiper-wrapper", children: testimonials.map(
                    testimonial => Testimonial(testimonial)
                )
            }),
            comket.div({class: "bullets swiper-pagination"}),
            comket.div({class: "next-button swiper-button-next"}),
            comket.div({class: "prev-button swiper-button-prev"})
        ]
    })
    new Swiper(container, {
        loop: true, grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        pagination: {
            el: container.children[1],
            dynamicBullets: true,
            clickable: true,
        },
        navigation: {
            nextEl: container.children[2],
            prevEl: container.children[3],
        }
    })
    return container
}