const inject = (items, sections) => {
  var result = [];
  items.forEach((element, itemsIndex) => {
    sections.forEach((item) => {
      if (item.index === itemsIndex) {
        result.push(item.content);
      }
    });

    result.push(element);
  });
  return result;
};
export { inject };
