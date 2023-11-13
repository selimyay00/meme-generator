import { FaReact } from 'react-icons/fa';

function Header() {
    return (
        <div className="header">
            <h2>Selim's Meme Generator</h2>
            <div className='right-side'>
            <FaReact size={30} style={{marginRight: '5'}} />
            <h3>Built with React</h3>
            </div>
            
        </div>
    )
}

export default Header