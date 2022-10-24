import { useMoralis, useMoralisWeb3Api,account,isAuthenticated,useWeb3ExecuteFunction} from "react-moralis";

const { isAuthenticated, Moralis,account } = useMoralis();

const Web3Api = useMoralisWeb3Api();

const contractProcessor = useWeb3ExecuteFunction();

const resolveLink = (url) => {
  if (!url || !url.includes("ipfs://")) return url;
  return url.replace("ipfs://", "https://gateway.ipfs.io/ipfs/");
};


  const fetchNFTs = async () => {
    const options = {
      chain: "mumbai",
      address:"0xdF5Ce0Eb85390170C08c277B5c07c7F0ea435898"
    }

    const mumbaiNFTs = await Web3Api.account.getNFTs(options);
    console.log(mumbaiNFTs.result[0])
    
   
  }