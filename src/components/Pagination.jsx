import { Link } from "react-router-dom";
import usePagination from "../hooks/usePagination";


const Pagination =({postperPage, totalPosts, paginate}) => {

 
    const pageNumbers =[];

    for (let i = 1; i <= Math.ceil(totalPosts/postperPage); i++) {
        pageNumbers.push(i)
        
    }
    
    // const pages = (num) =>{
    //     console.log("this page"+paginate.currentPage)
   
      
    // }
    return(
        <nav>
            <ul className="flex items-center -space-x-px h-8 text-sm pb-8 ">
                {pageNumbers.map(number => (
                       <li key={number} className="border-white border-[2px] ">
                        <a onClick={() => paginate(number)} className="font-semibold flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            {number}
                        </a>
                        
                       </li>
                       
                ))}
             
            </ul>
           
        
        </nav>
     
    )
}

export default Pagination;