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
function CheckBoxForm(){
    const [checked, setChecked] = useState([]);
    console.log(checked);
    const handleCheckBox = (id) => {
        const check = checked.includes(id);
        if(check){
            setChecked(checked.filter(item => item !== id));
        }else{
            setChecked(prev => [...prev, id]);
        }
    }
    return (
        <div>
            {courses.map((course) => (
                <div key={course.id}>
                    <input type='checkbox' onChange={()=>handleCheckBox(course.id)}/>{course.name}
                </div>
            ))}
        </div>
    )
}
export default CheckBoxForm;
//When you choose a value, it must be saved in the array with one value
//When you choose varies values, all of them must be saved
//when you unselect a value, it must also be removed from the array