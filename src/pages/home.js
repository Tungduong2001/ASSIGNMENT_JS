import Banner from "../components/banner";
import NewList from "../components/newList";
import Logo from "../components/logo";
const HomePage = {
    print() {
        return /* html */`
        <div class="mt-2">
            <a href="#">
                ${Banner.print()}
            </a>
        </div>
        <div class="content">
            ${NewList.print()}
        </div>
        `;
    },
};
export default HomePage;