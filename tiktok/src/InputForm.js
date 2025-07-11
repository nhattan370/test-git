import {useState} from'react'

function InputForm(){
    const [name,setName] = useState('');
    console.log(name);
    return (
        <div>
            <input value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <br></br>
            <button onClick={()=>setName('Nguyen Van BNN')}>Register</button>
        </div>
    )
}
export default InputForm;