import { useMoralis} from "react-moralis";

const {Moralis} = useMoralis();

const [theFile, setTheFile] = useState();

const changeHandler = (event) => {
    
    const img = event.target.files[0];
    setTheFile(img);
    setSelectedFile(URL.createObjectURL(img));
  };


const saveEdits = async () => {
const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();
    if (theFile) {
        const data = theFile;
        const file = new Moralis.File(data.name, data);
        await file.saveIPFS();
        myDetails.set("banner", file.ipfs());
      }
  
      await myDetails.save();
    }