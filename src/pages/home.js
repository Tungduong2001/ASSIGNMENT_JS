import Banner from "../components/banner";
import NewList from "../components/newList";
import Header from "../layout/header";
import Footer from "../layout/footer";
const HomePage = {
    print() {
        return /* html */`
        <div class="max-w-5xl m-auto">
            ${Header.print()}
            <div class="mt-2">
                <a href="#">
                    ${Banner.print()}
                </a>
            </div>
            <div class="content">
                ${NewList.print()}
            </div>
            <div class="pt-3">
                ${Footer.print()}
            </div>
        </div>
        `;
    },
};
export default HomePage;