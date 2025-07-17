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



function FakeAnotherApp(){
    const [lessonId, setLessonId] = useState(1);
    const handleComment = ({detail}) => console.log(detail); 
    useEffect(()=>{
        window.addEventListener('lesson-' + lessonId, handleComment);
        return ()=>{
            window.removeEventListener('lesson-'+ lessonId, handleComment);
        }
    }, [lessonId])

        return(
            <div>
                <h3>Fake <strong>Another</strong> chat App</h3>
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

export default FakeAnotherApp;
