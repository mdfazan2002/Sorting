import { useContext, useEffect } from "react";
import { SortingContext } from "../contexts/SortingContext";
import algorithmInfos from "../data/algorithmInfos";

function SortingChart() {
    const { sortingState, generateSortingArray, startVisualizing, changeSortingSpeed, changeAlgorithm } = useContext(SortingContext);

useEffect(() => {
    generateSortingArray();
}, [generateSortingArray]); // Add 'generateSortingArray' to the dependency array

    return (
        <div className="w-100vw h-100vh mt-4 mb-4 flex flex-col items-center ">
            <h1 className="text-center text-6xl font-extrabold text-white mb-10 drop-shadow-lg animate-pulse">
                 The Ultimate Sorting Visualizer 🚀
      </h1>
            {/* <img src="/logo.png" className="max-w-lg mb-6 w-full" /> */}
            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
    {/* Bubble Sort Button */}
    <button
        onClick={() => changeAlgorithm("bubble_sort")}
        className={`bg-carbon text-white px-5 py-3 rounded-3xl 
        ${sortingState.algorithm === "bubble_sort" 
            ? "bg-turquoise-dark border-4 border-turquoise text-white" 
            : "hover:bg-carbon-light"}
        transition-all duration-300 ease-in-out transform hover:scale-105`}
    >
        Bubble Sort
    </button>

    {/* Quick Sort Button */}
    <button
        onClick={() => changeAlgorithm("quick_sort")}
        className={`bg-carbon text-white px-5 py-3 rounded-3xl 
        ${sortingState.algorithm === "quick_sort" 
            ? "bg-turquoise-dark border-4 border-turquoise text-white" 
            : "hover:bg-carbon-light"}
        transition-all duration-300 ease-in-out transform hover:scale-105`}
    >
        Quick Sort
    </button>

    {/* Merge Sort Button */}
    <button
        onClick={() => changeAlgorithm("merge_sort")}
        className={`bg-carbon text-white px-5 py-3 rounded-3xl 
        ${sortingState.algorithm === "merge_sort" 
            ? "bg-turquoise-dark border-4 border-turquoise text-white" 
            : "hover:bg-carbon-light"}
        transition-all duration-300 ease-in-out transform hover:scale-105`}
    >
        Merge Sort
    </button>

    {/* Insertion Sort Button */}
    <button
        onClick={() => changeAlgorithm("insertion_sort")}
        className={`bg-carbon text-white px-5 py-3 rounded-3xl 
        ${sortingState.algorithm === "insertion_sort" 
            ? "bg-turquoise-dark border-4 border-turquoise text-white" 
            : "hover:bg-carbon-light"}
        transition-all duration-300 ease-in-out transform hover:scale-105`}
    >
        Insertion Sort
    </button>

    {/* Selection Sort Button */}
    <button
        onClick={() => changeAlgorithm("selection_sort")}
        className={`bg-carbon text-white px-5 py-3 rounded-3xl 
        ${sortingState.algorithm === "selection_sort" 
            ? "bg-turquoise-dark border-4 border-turquoise text-white" 
            : "hover:bg-carbon-light"}
        transition-all duration-300 ease-in-out transform hover:scale-105`}
    >
        Selection Sort
    </button>

    {/* Heap Sort Button */}
    <button
        onClick={() => changeAlgorithm("radix_sort")}
        className={`bg-carbon text-white px-5 py-3 rounded-3xl 
        ${sortingState.algorithm === "radix_sort" 
            ? "bg-turquoise-dark border-4 border-turquoise text-white" 
            : "hover:bg-carbon-light"}
        transition-all duration-300 ease-in-out transform hover:scale-105`}
    >
        Radix Sort
    </button>
</div>


            <div className="max-w-3xl w-full">
                <div className="mb-4 chart-container">
                    <div className="base mt-10"></div>
                    {sortingState.array.map((bar, i) => (
                        <div key={i} className="bar-container">
                            <div className={`select-none bar bar-${bar.state}`} style={{ height: `${Math.floor((bar.value / 100) * 100)}%` }}>
                                <p className={`pl-1.5 ${bar.state === "idle" ? "text-[#a9d7d3]" : "text-[#edc1cb]"}`}>{bar.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-4 max-w-3xl mb-8">
                    <button disabled={sortingState.sorting} onClick={startVisualizing} className="px-4 py-2 push-btn text-white-light disabled:brightness-75">
                        Start
                    </button>
                    <button disabled={sortingState.sorting} onClick={() => generateSortingArray()} className="text-white-light disabled:brightness-75">
                        New Array
                    </button>
                    <select
    disabled={sortingState.sorting}
    onChange={changeSortingSpeed}
    defaultValue="normal"
    placeholder="speed"
    className="bg-[#2C6961] ml-auto bg-carbon px-4 py-2 rounded-md cursor-pointer  
               transition-all ease-in-out 
               outline-none focus:ring-4 focus:ring-turquoise-dark
               hover:bg-carbon-light disabled:brightness-75 
                shadow-lg transform hover:scale-105"
>
    <option value="slow" className="bg-carbon text-black">Slow</option>
    <option value="normal" className="bg-carbon text-black">Normal</option>
    <option value="fast" className="bg-carbon text-black">Fast</option>
</select>


                </div>

                <div className="w-full h-0.5 bg-carbon-light mb-4" />
                <div className="w-full h-px bg-gray-300 my-4"></div>
                <div className="w-full h-px bg-gray-300 my-4"></div>
                <div>
                    <h1 className="font-bold text-2xl md:text-4xl">{algorithmInfos[sortingState.algorithm].name}</h1>
                    <p className="whitespace-pre-line mb-6 bold">{algorithmInfos[sortingState.algorithm].description}</p>
                    <div className="w-full h-0.5 bg-carbon-light mb-6" />
                    <div className="w-full h-px bg-gray-300 my-4"></div>
                    <div className="overflow-auto">
                    <table className="w-full text-left bg-carbon rounded-lg overflow-hidden">
    <thead className="bg-carbon-light text-white">
        <tr>
            <th className="px-6 py-3 border-r border-carbon-light font-semibold" rowSpan={2}>
                Algorithm
            </th>
            <th className="px-6 py-3 border-r border-carbon-light font-semibold" colSpan={3}>
                Time Complexity
            </th>
            <th className="px-6 py-3 font-semibold">Space Complexity</th>
        </tr>
        <tr className="border-b border-carbon-light">
            <th className="px-6 py-2">Best</th>
            <th className="px-6 py-2">Average</th>
            <th className="px-6 py-2 border-r border-carbon-light">Worst</th>
            <th className="px-6 py-2">Worst</th>
        </tr>
    </thead>

    <tbody className="text-white">
        {Object.keys(algorithmInfos).map((key, i) => (
            <tr key={i} className={`hover:bg-carbon-light transition-colors ${i % 2 === 0 ? "bg-carbon-dark" : "bg-carbon"} whitespace-nowrap`}>
                <td className={`px-6 py-3 text-xl ${i === 0 ? "pt-2" : ""} border-r border-carbon-light`}>
                    {algorithmInfos[key].name}
                </td>
                <td className={`px-6 py-3 ${i === 0 ? "pt-2" : ""}`}>
                    <span className={`px-2 py-1 font-bold border-2 border-blue-500 rounded-md bg-opacity-20`}>
                        {algorithmInfos[key].time_complexity.best[0]}
                    </span>
                </td>
                <td className={`px-6 py-3 ${i === 0 ? "pt-2" : ""}`}>
                    <span className={`px-2 py-1 font-bold border-2 border-green-500 rounded-md bg-opacity-20`}>
                        {algorithmInfos[key].time_complexity.average[0]}
                    </span>
                </td>
                <td className={`px-6 py-3 ${i === 0 ? "pt-2" : ""} border-r border-carbon-light`}>
                    <span className={`px-2 py-1 font-bold border-2 border-red-500 rounded-md bg-opacity-20`}>
                        {algorithmInfos[key].time_complexity.worst[0]}
                    </span>
                </td>
                <td className={`px-6 py-3 ${i === 0 ? "pt-2" : ""}`}>
                    <span className={`px-2 py-1 font-bold border-2 border-yellow-500 rounded-md bg-opacity-20`}>
                        {algorithmInfos[key].space_complexity[0]}
                    </span>
                </td>
            </tr>
        ))}
        
    </tbody>
</table>
<div className="w-full h-px bg-gray-300 my-4"></div>
<footer className="w-100vw mt-10 w-full py-4 bg-gray-800 text-center text-white text-xl">Designed by Mohammad Fazan ™ </footer>
                    </div>
                </div>
            </div>
            
        </div>

    );
}

export default SortingChart;
// import { useContext, useEffect } from "react";
// import { SortingContext } from "../contexts/SortingContext";
// import algorithmInfos from "../data/algorithmInfos";

// function SortingChart() {
//     const { sortingState, generateSortingArray, startVisualizing, changeSortingSpeed, changeAlgorithm } = useContext(SortingContext);

//     useEffect(() => {
//         generateSortingArray();
//     }, []);

//     return (
//         <div className="relative min-h-screen bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
//             {/* Enhanced Heading */}
//             <h1 className="text-center text-6xl font-extrabold text-white mb-10 drop-shadow-lg animate-pulse">
//                 The Ultimate Sorting Visualizer 🚀
//             </h1>
            
//             <div className="flex flex-wrap justify-center gap-3 mb-6">
//                 <button
//                     onClick={() => changeAlgorithm("bubble_sort")}
//                     className={`bg-carbon text-white px-5 py-3 rounded-3xl ${sortingState.algorithm === "bubble_sort" ? "ring-4 ring-green-500" : ""}`}
//                 >
//                     Bubble Sort
//                 </button>
//                 {/* Add buttons for other algorithms as necessary */}
//             </div>
            
//             {/* Time Complexity Section */}
//             <div className="mt-6">
//                 <h2 className="text-white text-4xl mb-4 text-center">Time Complexity</h2>
//                 <div className="grid grid-cols-3 gap-4 text-white">
//                     <div>
//                         <h3 className="text-lg font-bold">Bubble Sort</h3>
//                         <p>Worst: O(n²)</p>
//                         <p>Average: O(n²)</p>
//                         <p>Best: O(n)</p>
//                     </div>
//                     <div>
//                         <h3 className="text-lg font-bold">Quick Sort</h3>
//                         <p>Worst: O(n²)</p>
//                         <p>Average: O(n log n)</p>
//                         <p>Best: O(n log n)</p>
//                     </div>
//                     <div>
//                         <h3 className="text-lg font-bold">Merge Sort</h3>
//                         <p>Worst: O(n log n)</p>
//                         <p>Average: O(n log n)</p>
//                         <p>Best: O(n log n)</p>
//                     </div>
//                     {/* Add more algorithms */}
//                 </div>
//             </div>

//             {/* Footer with Name and Trademark */}
//             <footer className="absolute bottom-0 w-full py-4 bg-gray-800 text-center text-white">
//                 <p className="text-xl">Designed by Mohammad Fazan ™</p>
//             </footer>
//         </div>
//     );
// }

// export default SortingChart;
