import Navigo from "navigo";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import DetailNewsPage from "./pages/detailPage";
import Signin from "./signin/signin";
import Signup from "./signin/signup";
import News from "./admin/news";
import Dashboard from "./admin/dashboard";
import Newsadd from "./admin/newsadd";
import Newsedit from "./admin/newsedit";

const router = new Navigo("/", { linksSelector: "a" });

const render = (content) => {

    document.getElementById("content").innerHTML = content;

};

const signin = (content) => {
    document.getElementById("content").innerHTML = content;
};

const admin = (content) => {
    document.getElementById("content").innerHTML = content;
};
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
    "/signin": () => {
        signin(Signin.print());
    },
    "/signup": () => {
        signin(Signup.print());
    },
    "/admin/dashboard": () => {
        admin(Dashboard.print());
    },
    "/admin/news": () => {
        admin(News.print());
    },
    "/admin/news/add": () => {
        admin(Newsadd.print());
    },
    "/admin/news/edit/:id": ({ data }) => {
        const { id } = data;
        admin(Newsedit.print(id));
    },

});
router.resolve();