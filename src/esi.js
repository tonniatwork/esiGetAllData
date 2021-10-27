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

export const EVEESI = axios.create({
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

export async function getData(id, instance) {
  const response = await EVEESI.get(`${instance}/${id}`).catch((err) =>
    console.warn(err)
  );
  return response.data;
}
