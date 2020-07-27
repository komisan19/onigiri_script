function onigiri(onigiri) {
  const splitOnigiri = onigiri.split("");
  const onigiriJoin = splitOnigiri.map((s) => s.replace(s, "🍙"));
  return onigiriJoin.join(" ");
}

module.exports = onigiri;
