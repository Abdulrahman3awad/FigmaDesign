import Header from "./Header/Header.js";
import NavBar from "./NavBar/NavBar.js";
import Brands from "./Brands/Brands.js";
import Services from "./Services/Services.js";
import Programs from "./Programs/Programs.js";
import Tutors from "./Tutors/Tutors.js";
import Testimonials from "./Testimonials/Testimonials.js";
import Blogs from "./Blogs/Blogs.js";
import Footer from "./Footer/Footer.js";
document.body.append(
    NavBar(), Header(), Brands(), Services(),Programs(),Tutors(), Testimonials(), Blogs(), Footer()
)