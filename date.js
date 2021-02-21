//console.log(getDate());
//module.exports can be replaced by exports
module.exports.getDate = function () {
  const today = new Date();
  const options = { weekday: "long", day: "numeric", month: "long" };
  return today.toLocaleDateString("en-US", options);
};

module.exports.getDay = function () {
  const today = new Date();
  const options = { weekday: "long" };
  return today.toLocaleDateString("en-US", options);
};
console.log(module.exports);
