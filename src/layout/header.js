import Logo from "../components/logo";
import Menu from "../components/menu";
import Search from "../components/search";
const Header = {
    print() {
        return /*html*/`
      <div class="bg-[#272f54] py-4">
        <a href="#">
          ${Logo.print()}
        </a>
      </div>
      <div class="flex bg-[#ca7802] h-[50px]">
        <div  class="px-2">
          ${Menu.print()}
        </div>
        <div class="py-3 pl-[80px]">
          ${Search.print()}
        </div>
      </div> `;
    },
};

export default Header;