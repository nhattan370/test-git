import { useState, useEffect } from "react";
const lessons = [
    {
        id: 1,
        name: 'Love yourself'
    },
    {
        id: 2,
        name: "Don't need try hard to much"
    },
    {
        id: 3,
        name: 'Be your self'
    }
]

function FakeChatApp(){
    const [lessonId, setLessonId] = useState(1);

    useEffect(()=>{
        const time = setInterval(()=>{console.log(`Day la bai hoc thu ${lessonId}`)},1000);
        return ()=>{
            clearInterval(time);
        }
    },[lessonId])

    return(
        <div>
            <h3>Fake chat App</h3>
            <ul>
                {lessons.map(lesson=>(
                    <li 
                        key={lesson.id}
                        style={{color: lesson.id===lessonId ? 'red': 'black'}}
                        onClick={()=>{setLessonId(lesson.id)}}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default FakeChatApp;
//Hien thi bai hoc, hien thi active va bat su kien onClick de set lai active
//Luu lai id vao useState, lay id do su dung cho cac lan khac