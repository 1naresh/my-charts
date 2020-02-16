

import { List as iList, Map as iMap, fromJS } from "immutable";

var res = iMap([])


var arr = [
    { value: 23, headers: "bus.delhi.cash" },
    { value: 32, headers: "bus.mumbai.cash" },
    { value: 35, headers: "cab.delhi.cash" },
    { value: 19, headers: "cab.mumbai.cash" },
    { value: 21, headers: "bus.delhi.card" },
    { value: 12, headers: "bus.mumbai.card" },
    { value: 15, headers: "cab.delhi.card" },
    { value: 29, headers: "cab.mumbai.card" },
]

const getChildren = (headers, value, children) => {
    headers = headers.slice(1)
    let retValue = children ? children : iMap({})
    if (headers.length > 1) {
        if (children) {
            children = children.getIn([headers[0], "children"])
        }
        retValue = retValue.set(headers[0], fromJS({
            children: getChildren(headers, value, children),
            field_value: headers[0]
        }))
    } else {
        if (children) {
            children = children.set(headers[0], fromJS({ field_value: headers[0], value }))
            retValue = children
        } else {
            retValue = retValue.set(headers[0], fromJS({ field_value: headers[0], value }))
        }
    }
    return retValue
}



const objToArray = obj => {
    let resArr = []
    Object.keys(obj).map(key => {
        resArr.push(obj[key])
    })
    return resArr
}


export const getCube = listOfRecords => {
    listOfRecords.map(item => {
        let { headers, value } = item
        headers = headers.split(".")
        if (res.get(headers[0])) {
            let children = res.getIn([headers[0], "children"])
            children = getChildren(headers, value, children)
            res = res.setIn([headers[0], "children"], children)
        } else {
            res = res.set(headers[0], fromJS({
                children: getChildren(headers, value),
                field_value: headers[0]
            }
            ))
        }
    })
    return objToArray(res.toJS())
}

let data = [
    { cost: 83, platform: "bus", source: "delhi" },
    { cost: 83, platform: "bus", source: "mumbai" },
    { cost: 290, platform: "cab", source: "delhi" },
    { cost: 290, platform: "cab", source: "mumbai" },
]

var o = data.reduce((a, b) => {
    a[b.platform] = a[b.platform] || [];
    a[b.platform].push({ [b.source]: b.cost });
    return a;
}, {});

var a = Object.keys(o).map(function (k) {
    return { platform: k, source: Object.assign.apply({}, o[k]) };
});

export const resData = {
    fieldName: "mode",
    fieldValues: [
        {
            fieldValue: "cash",
            children: {
                fieldName: "medium",
                fieldValues: [
                    {
                        fieldValue: "bus",
                        children: {
                            fieldName: "source",
                            fieldValues: [
                                { fieldValue: "delhi", value: 23 },
                                { fieldValue: "mumbai", value: 32 }
                            ]
                        }
                    },
                    {
                        fieldValue: "cab",
                        children: {
                            fieldName: "source",
                            fieldValues: [
                                { fieldValue: "delhi", value: 35 },
                                { fieldValue: "mumbai", value: 19 }
                            ]
                        }
                    },
                ]
            }
        },
        {
            fieldValue: "card",
            children: {
                fieldName: "medium",
                fieldValues: [
                    {
                        fieldValue: "bus",
                        children: {
                            fieldName: "source",
                            fieldValues: [
                                { fieldValue: "delhi", value: 45 },
                                { fieldValue: "mumbai", value: 33 }
                            ]
                        }
                    },
                    {
                        fieldValue: "cab",
                        children: {
                            fieldName: "source",
                            fieldValues: [
                                { fieldValue: "delhi", value: 27 },
                                { fieldValue: "mumbai", value: 143 }
                            ]
                        }
                    },
                ]
            }
        }
    ]
}

