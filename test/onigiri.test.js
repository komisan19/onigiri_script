const onigiri = require("../index");

test("`おにぎり` is change 🍙", () => {
  expect(onigiri(`おにぎり`)).toBe("🍙 🍙 🍙 🍙");
});
