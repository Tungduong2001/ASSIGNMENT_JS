import LearningData from "../data";
import HeaderDashboard from "./header";
const Newsedit = {
    print(id) {
        const result = LearningData.find((data) => data.id === id);
        return /*html*/ `
        <div class="max-w-5xl m-auto">
            ${HeaderDashboard.print()}
            <div> 
            <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="" method="POST">
                    <div class="shadow sm:rounded-md sm:overflow-hidden">
                        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div class="grid grid-cols-3 gap-6">
                                <div class="col-span-3 sm:col-span-2">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700">
                                    Title
                                    </label>
                                <div class="mt-1 flex rounded-md shadow-sm">
                                    <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block  border-gray-600"  value="${result.title}" >
                                </div>
                            </div>
                        </div>
                    <div>
                        <label for="about" class="block text-sm font-medium text-gray-700">
                            Content
                        </label>
                        <div class="mt-1">
                            <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" >${result.desc}</textarea>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">
                            Image
                        </label>
                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div class="space-y-1 text-center">
                                <img class="mx-auto mt-4" src="${result.img}" alt="">
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Save
                        </button>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
        
            <div class="hidden sm:block" aria-hidden="true">
                <div class="py-5">
                <div class="border-t border-gray-200"></div>
                </div>
            </div>
        </div>
        `;
    },
};

export default Newsedit;