import NewList from "../components/newList";
import Footer from "../layout/footer";
import Header from "../layout/header";


const NewsPage = {
    print() {
        return /* html */`
        <div class="max-w-5xl m-auto">
            ${Header.print()}
            ${NewList.print()}
            <div class="pt-3">
            ${Footer.print()}
            </div>
        </div>    
        `;
    },
};

export default NewsPage;