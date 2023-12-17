import { useState, useEffect } from "react"

function Meme() {
    // Top text, bottom text and image will change
      // I have to track them and update the UI
        // That's why I need to use the useState Hook

        const [meme, setMeme] = useState({
            topText: '',
            bottomText: '',
            imageUrl: 'https:\/\/i.imgflip.com\/3lmzyx.jpg' // Replace with your default image URL
        });
        
        const [allMemes, setAllMemes] = useState([]);
        
        useEffect(() => {
            fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(data => {
                    setAllMemes(data.data.memes);
                })
                .catch(error => {
                    console.error('Error fetching meme data:', error);
                });
        }, []);
        
    
    function newMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: url
        }))
    }

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
         
        // For instance, when user typed on top text
          //and moved and changed the bottom text,
            // while bottom text tracks and updates the user input,
              // top text should still hold its value
                // this is why I used the spread operator
        
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
                        name="topText"  
                    />
                    <input 
                        type="text" 
                        placeholder="Bottom text"
                        value={meme.bottomText} 
                        onChange={handleChange}
                        name="bottomText"
                    />
                </div>
                <button
                    className="form-button"
                    onClick={newMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
            <div className="meme" style={{ position: 'relative' }}>
                <img src={meme.imageUrl} alt="meme_image" />

                <h2 className="top-text" >{meme.topText}</h2>

                <h2 className="bottom-text" >{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme