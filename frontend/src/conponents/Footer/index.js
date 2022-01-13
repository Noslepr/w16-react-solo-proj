import './Footer.css'
import github from '../../images/github_icon.png'
import linkedIn from '../../images/linkedin_icon.png'

const Footer = () => {
    return (
        <footer>
            <ul id='footer-ul'>
                <li>Java Script</li>
                <li>React</li>
                <li>Redux</li>
                <li>Express</li>
                <li>Postgres</li>
                <li>Sequelize</li>
                <li>HTML</li>
                <li>CSS</li>
                <li className='footer-right'>
                    <div>Chris Young</div>
                    <a href='https://github.com/Noslepr'>
                        <img className='git-link'src={github}></img>
                    </a>
                    <a href='https://www.linkedin.com/in/chris-young-96453917/'>
                        <img className='git-link'src={linkedIn}></img>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
