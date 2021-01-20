function mapToNegativize(sourceArray){
    return sourceArray.map(item => item * -1)
}

function mapToNoChange(sourceArray){
    return sourceArray
}

function mapToDouble(sourceArray){
    return sourceArray.map(item => item * 2)
}

function mapToSquare(sourceArray){
    return sourceArray.map(item => item**2)
}

function reduceToTotal(sourceArray, startingPoint=0){
    let memo = startingPoint
    sourceArray.forEach(item => memo += item)
    return memo
}

function reduceToAllTrue(sourceArray){
    let memo = true
    sourceArray.forEach(item => {
        if (!item) {memo = false}
    })
    return memo 
}

function reduceToAnyTrue(sourceArray){
    let memo = false
    sourceArray.forEach(item => {
        if (item) {memo = true}
    })
    return memo 
}

