import "./styles.css";
import esi from "./esi";

const rootElement = document.querySelector("#app");

esi.marketGroups.then(
  (r) => (rootElement.innerHTML = `Market Groups: ${r.length}`)
);
