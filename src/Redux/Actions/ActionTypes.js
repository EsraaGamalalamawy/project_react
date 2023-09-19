export const addy="addyear"
export const dely="delyear"
export const addn="addn"
export const deln="deln"

export const addaction=async(dispatch1)=>{
    return dispatch1({type:addy})
}
export const delaction=async(dis)=>{
    return dis({
        type:dely
    })
}
export const addnumaction= async(dispatch1,e)=>{
    return dispatch1({
        type: addn,
        value: e
    })
}
export const delnumaction=(dis,e)=>{
    return dis({
        type: deln,
        value: e
    })
}