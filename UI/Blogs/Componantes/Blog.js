import comket from "../../dependencies/comket.js";

export default function Blog(blog) {
    let imageTitle = blog.title.replaceAll(" ", "-").toLowerCase();
    let span = [];
    blog.tags.map(tag => (span.push(
        comket.span({
            text: tag.name, style: {
                color: tag.color,
                backgroundColor: tag.bg
            }
        })
    )))
    let blogCard = comket.div({
        class: "blogCard",
        children: [
            comket.img({ src: `./media/blogs/${imageTitle}.png` }),
            comket.div({
                class: "details",
                children: [
                    comket.h6({ text: blog.date }),
                    comket.h5({ text: blog.title }),
                    comket.p({ text: blog.snapshot }),
                    comket.div({
                        class: "tags",
                        children: span
                    })
                ]
            })
        ]
    })
    return blogCard

}