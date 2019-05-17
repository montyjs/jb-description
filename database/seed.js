const faker = require('faker');

const create = () => {
  const result = [];
  const data = [];
  let i = 0;
  while (i < 99) {
    const arr = [];
    for (let j = 0; j < 11; j++) {
      arr.push(faker.lorem.word());
    }
    data.push(arr);
    i += 1;
  }
  data.forEach((doc) => {
    result.push(`VALUES ('${doc[0]}', '${doc[1]}', '${doc[2]}', '${doc[3]}', '${doc[4]}', '${doc[5]}', '${doc[6]}', '${doc[7]}', '${doc[8]}', '${doc[9]}', '${doc[10]}');`)
  });
  return result;
};

const dummyData = create();

module.exports = {
  dummyData,
};
