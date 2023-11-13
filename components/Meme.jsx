import { useState } from "react"

function Meme() {
    // Top text, bottom text and image will change
      // I have to track them and update the UI
        // That's why I need to use the useState Hook

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        imageUrl: ''
    })
    
    function handleClick() {
        alert("button clicked!")
    }

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        })) 
    }
    
    return (
        <main>
            <div className="form">
                <div className="form-inputs">
                    {/* TODO: Connect the inputs to proper states */}
                    <input 
                        type="text" 
                        placeholder="Top text"
                        value={meme.topText}
                        onChange={handleChange}  
                    />
                    <input 
                        type="text" 
                        placeholder="Bottom text"
                        value={meme.bottomText} 
                        onChange={handleChange}
                    />
                </div>
                <button
                    className="form-button"
                    onClick={handleClick}
                >
                    Get a new meme image
                </button>
            </div>
        </main>
    )
}

export default Meme