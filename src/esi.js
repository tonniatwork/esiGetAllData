import axios from "axios";
import https from "https";
const httpsAgent = new https.Agent({ keepAlive: true });

const basePath = "/latest";
const host = "esi.evetech.net";
const datasource = {
  default: "tranquility",
  name: "datasource",
  enum: ["tranquility"]
};
const language = {
  default: "en",
  name: "language",
  enum: ["en", "en-us", "de", "fr", "ja", "ru", "ko"]
};

const EVEESI = axios.create({
  baseURL: "https://" + host + basePath,
  params: {
    [datasource.name]: datasource.default
    //    [language.name]: language.default
  },
  headers: {
    "Accept-Language": language.default
  },
  httpsAgent
});

const esi = {
  getMarketGroups: async () => {
    const r = await EVEESI.get("markets/groups");
    return r.data;
  },
  getData: async function (id, instance) {
    try {
      const response = await EVEESI.get(`${instance}/${id}`);
      return response.data;
    } catch (err) {
      console.warn(err);
      throw Error(err);
    }
  }
};

export default esi;
