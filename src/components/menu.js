const Menu = {
    print() {
        return /* html */`
        <ul class="flex">
        <li class="block leading-[50px] hover:bg-indigo-600 hover:text-white"><a class="px-4" href="/">Trang chủ</a></li>
        <li class="block leading-[50px] hover:bg-indigo-600 hover:text-white "><a class="px-4" href="">Tuyển sinh</a></li>
        <li class="block leading-[50px] hover:bg-indigo-600 hover:text-white "><a class="px-4" href="/news">Tin tức</a></li>
        <li class="block leading-[50px] hover:bg-indigo-600 hover:text-white "><a class="px-4" href="/signin">Đăng nhập</a></li>
        <li class="block leading-[50px] hover:bg-indigo-600 hover:text-white "><a class="px-4" href="/admin/dashboard">Dashboard</a></li>
        </ul>
        `;
    }
};

export default Menu;