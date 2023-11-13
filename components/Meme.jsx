function Meme() {
    return (
        <main>
            <form className="form">
                <div className="form-inputs">
                    <input type="text" placeholder="Top text" />
                    <input type="text" placeholder="Bottom text" />
                </div>
                <button
                    className="form-button"
                >
                    Get a new meme image
                </button>
            </form>
        </main>
    )
}

export default Meme