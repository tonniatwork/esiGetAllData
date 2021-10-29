import "./styles.css";
import esi from "./esi";

const rootElement = document.querySelector("#app");

const splitToChunks = (items, chunkSize = 100) => {
  const result = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    result.push(items.slice(i, i + chunkSize));
  }
  return result;
};

const normalizeArray = (arr, key) => {
  let result = {};
  arr.forEach((elem) => {
    result[elem[key]] = elem;
  });

  return result;
};

Promise.all([
  esi.getMarketGroups(),
  esi.getSDE("https://sde.zzeve.com/eveIcons.json"),
  esi.getSDE("https://sde.zzeve.com/invMarketGroups.json")
]).then((data) => {
  let chunkSize = 20;
  for (let i = 0; i < data[0].length; i += chunkSize) {}

  console.log(normalizeArray(data[1], "iconID"));
});

esi
  .getMarketGroups()
  .then((r) => (rootElement.innerHTML = `Market Groups: ${r}`));
