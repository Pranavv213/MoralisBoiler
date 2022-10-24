import { useMoralis } from "react-moralis";

const { authenticate, account,Moralis } = useMoralis();

<Button variant="primary" onClick={()=>{
    authenticate()
 }}>Login</Button>