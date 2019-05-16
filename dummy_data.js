var faker = require('faker')

let emptyData = [];

let seed = (dataArr) => {
  let i = 0
  while(i < 100) {
    let arr = []
    for(let j = 0; j < 11; j++) {
      arr.push(faker.lorem.word())
    }
    dataArr.push(arr)
    i++;
  }
  return dataArr
}

let dummyData = seed(emptyData)

export default dummyData;