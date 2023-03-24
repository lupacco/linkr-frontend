import axios from "axios";

export async function customFetcher(url) {
  const response = await axios
    .get(`https://rlp-proxy.herokuapp.com/v2?url=${url}`)
    .then((res) => {
    //   const json = res.json();
        console.log(res)
    //   return json.metadata;
    })
    .catch((err) => {
      console.log(err);
    });
}
