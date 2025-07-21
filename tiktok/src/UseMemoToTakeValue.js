import { useState, useRef, useMemo } from "react";
function UseMemoToTakeValue(){
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [products, setProducts] = useState([]);

    const nameRef = useRef();
    const handleAdd = () => {
        setProducts([...products, 
            {
                name: name,
                price: +price
            }
        ])
        setName('');
        setPrice(0);
        nameRef.current.focus()
    }
    //Tranh lap lai logic nay nhieu lan khi co State thay doi
    //******************************************************** */
    const calculationTotal = useMemo(()=>{
        const totalNumber = products.reduce((total, product) => total + product.price,0) 
        return totalNumber
    },[products])
    //******************************************************** */

    return (
        <div>
            <h2>Use useMemo to avoid handling unnesscery logic </h2>
            <div>
                <input ref={nameRef} type="text" placeholder="Enter product....." value={name} onChange={(e)=>setName(e.target.value)}/>
                <br></br>
                <input type="number" placeholder="Enter price....." value={price} onChange={(e)=>setPrice(e.target.value)}/>
                <br></br>
                <button onClick={handleAdd}>Add</button>
            </div>
            <div>
                <ul>
                    {products.map((product, index)=>(
                        <li key={index}>{product.name} - {product.price}</li>
                    ))}
                </ul>
            </div>
            <div>Total: {calculationTotal}</div>
        </div>
    )
}
export default UseMemoToTakeValue;