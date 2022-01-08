import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import Footer from "./layout/footer";
import Header from "./layout/header";
const router = new Navigo("/");

const render = (header,content, footer) =>{
    document.getElementById("header").innerHTML=header.print();
    document.getElementById("content").innerHTML=content.print();
    document.getElementById("footer").innerHTML=footer.print();
}
router.on({
    "/": ()=> {
        render(Header,HomePage,Footer);
    },
    "/about":()=>{
        render(AboutPage);
    }
});
router.resolve();