
export const getRangeMax = (val,d)=>{
    d = d ? d : 1
    if(Math.floor(val/10) === 0 ){
        return (val+1) * d
    }else{
        d = d * 10
        return getRangeMax(Math.floor(val/10),d)
    }
}