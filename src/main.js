import Navigo from "navigo";
import HomePage from "./pages/home";
import Footer from "./layout/footer";
import Header from "./layout/header";
import NewsPage from "./pages/news";
import DetailNewsPage from "./pages/detailPage";
const router = new Navigo("/", { linksSelector: "a" });

const render = (content) => {
    document.getElementById("header").innerHTML = Header.print();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.print();
}

router.on({
    "/": () => {
        render(HomePage.print());
    },
    "/news": () => {
        render(NewsPage.print());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        render(DetailNewsPage.print(id));
    },
});
router.resolve();