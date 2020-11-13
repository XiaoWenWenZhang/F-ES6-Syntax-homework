const parseData = (jsonData) => {
  const { data, column } = jsonData;
  var result = [];
  data.forEach((item, currentIndex) => {
    var dataObj = {};
    column.forEach((e, index) => {
      dataObj[e.name] = item[index];
    });
    result[currentIndex] = dataObj;
  });
  return result;
};

export { parseData };
