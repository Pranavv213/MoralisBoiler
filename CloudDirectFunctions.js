import { useMoralis } from "react-moralis";
const { Moralis } = useMoralis();

const saveEdits = async () => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();
    myDetails.set("qwerty", "IamSuperHero");

}

const getData=async ()=>{
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();
    const arr=myDetails.attributes.image;
    console.log(arr);
}
