import LearningData from "../data";

const DetailNewsPage = {
    print(id) {
        const result = LearningData.find((post) => post.id === id);
        return /*html*/`
            <div class="border-[1px] ">
                <img class="mx-auto mt-4" src="${result.img}" alt="">
                <h3 class="py-2 font-medium font-sans hover:text-[#282f53] mx-auto pl-10 text-red-600">${result.title}</h3>
                <p class="pb-3 pt-1 pl-10 text-xs pr-2">${result.desc}</p>
            </div>
        `;
    },
};
export default DetailNewsPage;