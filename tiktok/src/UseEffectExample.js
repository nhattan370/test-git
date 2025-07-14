import { useEffect, useState } from "react";

function UseEffectExample(){
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        if(title.trim()){
            document.title = title;
        }else{
            document.title = 'React'
        }
    })
    useEffect(()=>
        {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.json())
            .then(res=>setPosts(res))
        },[]);
    return (
        <div>
            <h3>useEffect with no dependences</h3>
            <input
                onChange={(e)=>setTitle(e.target.value)}
            />
            <br></br>
            <h3>useEffect with empty dependences</h3>
            <ul>
                {posts.map((post,index)=>(
                    <li key={index}>{post.title}</li>
                ))}
            </ul>

        </div>
    )
}

export default UseEffectExample;