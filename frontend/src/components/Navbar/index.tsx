import {ReactComponent as GithubIcon} from '../../assets/img/github.svg';
import './style.css';

function Navbar () {
    return (
        <header>
    <nav className="container">
        <div className="dsmovie-nav-content">
            <h1>DSMovie Filmes</h1>
            <a href="https://github.com/rafaelgauderio" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link">/rafaeldeluca</p>
                </div>
            </a>
        </div>
    </nav>
</header> 
    )
}

export default Navbar;