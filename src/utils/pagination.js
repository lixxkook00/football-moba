export const getCurrentList = (TOTALITEMFORPAGINATION,quantityProductPerPage,currentPage) => { 
    const currentProductListTemp = [...TOTALITEMFORPAGINATION]
      // get index of current page
      const firstProductIndex = (currentPage-1)*quantityProductPerPage;
      const lastProductIndex = 
                              (currentPage*quantityProductPerPage) >= (currentProductListTemp.length) 
                              ? currentProductListTemp.length 
                              : (currentPage*quantityProductPerPage)
      // create new product list
    const newProductList = currentProductListTemp.slice(firstProductIndex,lastProductIndex)

    return newProductList
}

export const handleNextPrevButton = (action,setCurrentPage,currentPage) => {
      switch (action) {
        case "Go to previous page":
            setCurrentPage(currentPage-1)
            break;
        case "Go to next page":
            setCurrentPage(currentPage+1)
            break
        default:
            break;
    }
}