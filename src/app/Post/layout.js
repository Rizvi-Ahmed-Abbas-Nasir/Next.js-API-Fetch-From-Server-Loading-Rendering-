import Link from "next/link";
import {use} from "react";
async function getPosts(){
  let post = await fetch("https://dummyjson.com/posts?limit=3");

  return post.json();
}


export default function Layout({ children }){
    let {posts} = use(getPosts());
    console.log(posts);
    return(

    <div>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/Post/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
      <div>{children}</div>
      </div>


  );
}