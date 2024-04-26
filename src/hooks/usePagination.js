import { useState } from "react";

function usePagination() {
    const [currentPage , setCurrentPage] = useState(1)
    const [postsPerPage ] = useState(20)


    const indexofLastPost = currentPage * postsPerPage;
    const indexofFirstPost = indexofLastPost - postsPerPage;
  

    return{currentPage,postsPerPage, indexofFirstPost,indexofLastPost, setCurrentPage}
}
export default usePagination;