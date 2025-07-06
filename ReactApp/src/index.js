import React from 'react'
import ReactDOM from 'react-dom/client'

function App(){
    return (
        <div>
            <h2>Hi bro</h2>
            <h1>you are not alone</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

