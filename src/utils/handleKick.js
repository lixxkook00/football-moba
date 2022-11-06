
export function getUrlVideo (result,powerPercent,currentSide) {
    // get url
    let url = ""
    if(result !==""){
        if(window.innerWidth < 740){
            if(powerPercent > 80){
                if(currentSide === "right-down" || currentSide === "right-up"){
                    url = `miss-right-over-mobile.mp4`
                }else if(currentSide === "left-down" || currentSide === "left-up"){
                    url = `miss-left-over-mobile.mp4`
                }else{
                    url = `miss-${currentSide}-over-mobile.mp4`
                }
            }
            else if(powerPercent < 30){
                url = `miss-${currentSide}-mobile.mp4`
            }
            else{
                if(result.result){
                    url = `goal-${currentSide}-mobile.mp4`
                }else{
                    url = `miss-${currentSide}-mobile.mp4`
                }
                
            }
        }else{
            if(powerPercent > 80){
                if(currentSide === "right-down" || currentSide === "right-up"){
                    url = `miss-right-over.mp4`
                }else if(currentSide === "left-down" || currentSide === "left-up"){
                    url = `miss-left-over.mp4`
                }else{
                    url = `miss-${currentSide}-over.mp4`
                }
            }
            else if(powerPercent < 30){
                url = `miss-${currentSide}.mp4`
            }
            else{
                if(result.result){
                    url = `goal-${currentSide}.mp4`
                }else{
                    url = `miss-${currentSide}.mp4`
                }
                
            }
        } 
    }

    return url
}