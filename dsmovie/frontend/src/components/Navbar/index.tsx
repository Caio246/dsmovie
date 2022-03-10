import { ReactComponent as GitHubIcon } from 'assets/img/github.svg';
import './styles.css'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/Caio246">
            <div className='dsmovie-contact-container'>
              <GitHubIcon></GitHubIcon>
              <p className='dsmovie-contact-link'>/devsuperior</p>
            </div>
          </a>
        </div>
      </nav>
    </header >
  );
}

export default Navbar