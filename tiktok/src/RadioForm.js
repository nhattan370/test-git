import { useState } from "react";
const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'Javascript'
    },
    {
        id: 3,
        name: 'ReactJS'
    }
]
function RadioForm(){
    const [checked, setChecked] = useState();
    console.log(checked);
    return (
        <div>
            {courses.map((course) => (
                <div key={course.id}>
                    <input type='radio' onChange={()=>setChecked(course.id)} checked={checked===course.id}/>{course.name}
                </div>
            ))}
        </div>
    )
}
export default RadioForm;