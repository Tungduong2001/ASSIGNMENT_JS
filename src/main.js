import Navigo from "navigo";
import HomePage from "./pages/home";
import Footer from "./layout/footer";
import Header from "./layout/header";
import NewsPage from "./pages/news";
const router = new Navigo("/", { linksSelector: "a" });

const render = (header, content, footer) => {
    document.getElementById("header").innerHTML = header.print();
    document.getElementById("content").innerHTML = content.print();
    document.getElementById("footer").innerHTML = footer.print();
}

const about_render = (header, content, footer) => {
    document.getElementById("header").innerHTML = header.print();
    document.getElementById("content").innerHTML = content.print();
    document.getElementById("footer").innerHTML = footer.print();
}
router.on({
    "/": () => {
        render(Header, HomePage, Footer);
    },
    "/news": () => {
        about_render(Header, NewsPage, Footer);
    }
});
router.resolve();