import { useState, useEffect } from "react";
function PreviewAvatar(){
    const [avatar, setAvatar] = useState();
    const handleUploadImage = (e) =>{
        const file = e.target.files[0];
        const link = URL.createObjectURL(file);
        file.preview = link;
        setAvatar(file);
    }
    //clear
    useEffect(()=>{
        return () => URL.revokeObjectURL(avatar && avatar.preview);
    },[avatar])
    return (
        <div>
            <input type="file" onChange={handleUploadImage}/>
            {avatar && <img src={avatar.preview} alt="Hello" style={{width:'200px', height:'150px'}}/>}
        </div>
    )
}
export default PreviewAvatar
//Co nut up anh, noi chua anh
//Khi click vao thi lay duoc link anh. Khi anh thay doi thi link anh cung thay doi, can 1 bien de lien tuc luu link anh nen dung useState