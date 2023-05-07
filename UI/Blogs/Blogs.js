import comket from "../dependencies/comket.js";
import Blog from "./Componantes/Blog.js";
import blogs from "../../database/blogs.js"
export default function  Blogs(){
    let chLeft = [];
    let chRight = [];
    blogs.slice(0, 2).map(blog => {chLeft.push(Blog(blog))})
    chRight.push(Blog(blogs[2]))
    let container = comket.div({
        class:"blogs",
        children :[
            comket.h3({text:"Our recent blogs"}),
            comket.div({
                class:"cards",
                children:[
                    comket.div({
                        class:"left",
                        children:chLeft
                    }),
                    comket.div({
                        class:"right",
                        children: chRight
                    })
                    

                ]
            }),
            comket.button({class:"exploreBtn",text:"Explore All Blogs"})
        ]
    })
    return container
}