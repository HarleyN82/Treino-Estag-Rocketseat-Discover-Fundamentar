// Estrutural 

let valueHour = 50
let estimatedTime = 20
let discount = valueHour * estimatedTime * (10/100)
let estimatedCost = valueHour * estimatedTime - discount
console.log(estimatedCost)

// POO

const job = new Job()
job.valueHour = 50
job.estimatedTime = 20
job.discount = 10
//const estimatedCost = job.calculeEstimated()
console.log(estimatedCost)