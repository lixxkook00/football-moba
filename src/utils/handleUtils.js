export function getValueFromForm(e,name){
    return e.target.elements[name].value
}

export function handleFilter(option,MAIN_DATA,setData){
    let temp = []
    if(option!=="All"){
        MAIN_DATA.map((item) => {
            if(item.rarity===option){
                temp.push(item)
            }
        })
        setData([...temp])
    }else{
        setData([...MAIN_DATA])
    }
}

export const handleFilterByDate = (array,action) => {
  let defaultList=[]
  if(action === "oldest") {
    defaultList = [...array].sort((a, b) =>
      parseFloat(new Date(a.create_at).getTime()) > parseFloat(new Date(b.create_at).getTime()) ? 1 : -1
    )
    // console.log("sort roi ne",defaultList)
  }else if(action === "newest") {
    defaultList = [...array].sort((a, b) =>
      parseFloat(new Date(a.create_at).getTime()) < parseFloat(new Date(b.create_at).getTime()) ? 1 : -1
    )
    // console.log("sort roi ne",defaultList)
  }

  return defaultList
}

export const handleFilterByPrice = (array,action) => {
  let defaultList=[]
  if(action === "lowest") {
    defaultList = [...array].sort((a, b) =>
        parseFloat(a.price) > parseFloat(b.price) ? 1 : -1
    )
  }
  else if(action === "highest") {
    defaultList = [...array].sort((a, b) =>
        parseFloat(a.price) < parseFloat(b.price) ? 1 : -1
    )
  }
  return defaultList
}

export const handleFillterByRarity = (array,rarity) => {
    let tempList = []

    if(rarity!=="All"){
        array.map((item) => {
            if(item.rarity===rarity){
                tempList.push(item)
            }
        })
        return tempList
    }else{
        return array
    }
}

export const mainFilter = (MAIN_DATA,setData,price,rarity,date) => {
  let result = [...MAIN_DATA]

  if(price==="" && rarity==="" && date==""){
    return MAIN_DATA
  }

  if(rarity !== ""){
    result = handleFillterByRarity([...result],rarity)
  }

  if(date !== ""){
    result = handleFilterByDate([...result],date)
  }

  if(price !== ""){
    result = handleFilterByPrice([...result],price)
  }

  setData(result)
}