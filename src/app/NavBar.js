import Link from "next/link";

export default function  NavBar(){
    return(
       
        <div style={{padding:"1em"}}>
            <Link href="/" style={{margin:"0.5em"}}>Home</Link>
            <Link href="./Post">Post</Link>
        </div>
   
    );

}