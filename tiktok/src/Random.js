import {useState} from 'react';

function Random() {
    const gifts = ['CPU i9','RAM 32GB RGB','RGB Keyboard'];
    const [gift, setGift] = useState();
    const randomGift = ()=>{
        const index = Math.floor(Math.random()*3);
        setGift(gifts[index]);
    }
  return (
    <div>
        <h1>{gift || 'Khong co phan thuong'}</h1>
        <button onClick={randomGift}>Lay thuong</button>
    </div>
  )
}

export default Random;