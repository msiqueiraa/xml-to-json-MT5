module.exports = {
  removeSpace(value) {
    value = JSON.stringify(value);
    value = value.trim();
    value = value.replace(/\s/g, "");
    value = JSON.parse(value);
    return value;
  },
};
