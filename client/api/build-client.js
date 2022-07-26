import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    // we are on the server
    return axios.create({
      baseURL: "http://ticketing-app.lol/",
      headers: req.headers,
    });
  } else {
    //we must be on the browser
    return axios.create({
      baseUrl: "/",
    });
  }
};
