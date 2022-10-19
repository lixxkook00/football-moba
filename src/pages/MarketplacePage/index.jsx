import React , { useEffect, useState} from 'react'
import Pagination from '@mui/material/Pagination';

import { useNavigate } from 'react-router-dom'
import { handleGetMarketList } from '../../utils/handleMarketplace'
import { handleFilter , mainFilter } from '../../utils/handleUtils'

import MarketplaceCart from '../../carts/MarketplaceCart'
import Filter from '../../components/Filter'
import LoadingScreen from '../../pages/LoadingScreen'
import { getCurrentList, handleNextPrevButton } from '../../utils/pagination'

let quantityProductPerPage = 8;

export default function MarketplacePage() {

  const [loading,setLoading] = useState(false)

  // data
  const [data,setData] = useState([])
  const [MAIN_DATA,SET_MAINDATA] = useState([])
  const [TOTALITEMFORPAGINATION,SETTOTALITEMFORPAGINATION] = useState([]);

  // filter option
  const [filterOption,setFilterOption] = useState("all")
  const [filterPrice,setFilterPrice] = useState("")
  const [filterDate,setFilterDate] = useState("")

  // pagination
  const [pageNum,setPageNum] = useState(0);
  const [currentPage,setCurrentPage] = useState(1)

  let navigate = useNavigate()

  const getList = async () => {
    setLoading(true)
    const result = await handleGetMarketList(setLoading,navigate,setData,SET_MAINDATA,SETTOTALITEMFORPAGINATION)
  }

  useEffect(() => {
    getList()
  },[])

  useEffect(() => {
    setCurrentPage(1)
    mainFilter(MAIN_DATA,SETTOTALITEMFORPAGINATION,filterPrice,filterOption,filterDate)
  },[filterOption,filterPrice,filterDate])

  // handle pagination
  useEffect(() => {
    setPageNum(
      (TOTALITEMFORPAGINATION?.length%quantityProductPerPage) > 0 
      ? 
        Math.floor(TOTALITEMFORPAGINATION?.length/quantityProductPerPage) +1 
      : 
        Math.floor(TOTALITEMFORPAGINATION?.length/quantityProductPerPage)
    )

    setData([...getCurrentList(TOTALITEMFORPAGINATION,quantityProductPerPage,1)])
  },[TOTALITEMFORPAGINATION])

  useEffect(() => {
      setData([...getCurrentList(TOTALITEMFORPAGINATION,quantityProductPerPage,currentPage)])
  },[currentPage,pageNum])

  return (
    <div className="marketplace home">

        <LoadingScreen state={loading} />

        <div className="container">

          <Filter setFilterOption={setFilterOption}/>

          <div className="row">
            <div className="col-md-4">
              <div className="select">
                <select
                  value={filterPrice}
                  onChange={(e) => setFilterPrice(e.target.value)} 
                >
                  <option value="">Filter by Price</option>
                  <option value="lowest">Lowest Price</option>
                  <option value="highest">Highest Price</option>
                </select>
                <div className="select-icon">
                  <i className="fa-solid fa-angles-down"></i>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="select">
                <select
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)} 
                >
                  <option value="">Filter by Date</option>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
                <div className="select-icon">
                  <i className="fa-solid fa-angles-down"></i>
                </div>
              </div>
            </div>

          </div>

          <div className="marketplace-wrapper hidden-scroll-bar">
            <div className="row">
              {
                data
                ?
                  data.map((item,index) => {
                    // console.log(item)
                    return (
                      <MarketplaceCart data={item} key={index}/>
                    )
                 })
                :
                <div className="centering">
                  No Item
                </div>
              }

            </div>

            <div className="centering">
              <Pagination 
                onChange={(e) => {
                  setCurrentPage(parseInt(e.target.innerText))
                  handleNextPrevButton(e.currentTarget.getAttribute("aria-label"),setCurrentPage,currentPage)
                }}
                count={pageNum} 
                color="primary" 
              />
              
            </div>
          </div>
        </div>
    </div>
  )
}
