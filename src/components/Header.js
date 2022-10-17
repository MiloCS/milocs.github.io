import cambridge from './images/cambridge.jpg';
import umass from './images/umass.jpeg';
import dc from './images/dc.jpg';

function Header() {
    return (
        <div className="header">
            <h1>Milo Cason-Snow</h1>
            <div className='places-images'>
                <img src={cambridge} height="150" alt=""></img>
                <img src={umass} height="150" alt =""></img>
                <img src={dc} height="150" alt=""></img>
            </div>
        </div>
    )
}

export default Header;