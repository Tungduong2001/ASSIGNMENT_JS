import LearningData from "../data";


const NewList = {
    print() {
        return /* html */`
        <h1 class="font-bold font-sans uppercase text-[#393c45] py-4 text-xl">Tin tức học tập</h1>
        <div class="grid grid-cols-3 gap-4">
        ${LearningData.map((post) => /*html*/`
        <div class="border-[1px] ">
            <a href="#">
            <img class="mx-auto mt-4" src="${post.img}" alt="">
            <h3 class="py-2 font-medium font-sans hover:text-[#282f53] mx-auto pl-10 text-red-600">${post.title}</h3>
            <p class="pb-3 pt-1 pl-10 text-xs pr-2">${post.desc}</p>
            </a>
        </div>
        `).join("")}
        </div>
        
        <h1 class="font-bold font-sans uppercase text-[#393c45] py-4 text-xl">Hoạt động sinh viên</h1>
        <div class="grid grid-cols-3 gap-4">
        ${LearningData.map((post) => /*html*/`
        <div class="border-[1px] ">
            <a href="#">
            <img class="mx-auto mt-4" src="${post.img}" alt="">
            <h3 class="py-2 font-medium font-sans hover:text-[#282f53] mx-auto pl-10 text-red-600">${post.title}</h3>
            <p class="pb-3 pt-1 pl-10 text-xs pr-2">${post.desc}</p>
            </a>
        </div>
        `).join("")}
        </div>
        `;
    },
};
export default NewList;
