import { useMoralis } from "react-moralis";
const { Moralis } = useMoralis();

async function fetchMyList() {
    const theList = await Moralis.Cloud.run("getMyList", { addrs: account });
}

async function updateMyList() {
    await Moralis.Cloud.run("updateMyList", {
      addrs: account,
      newFav: selectedFilm.Name,
    });
}