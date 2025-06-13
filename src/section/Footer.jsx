import { socialImgs } from '../constants/index'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center items-center">
                    <a href="/">Visit my blog</a>
                </div>

                <div className="socials">
                    {socialImgs.map((img) => (
                        <a className='icon' href={img.url} target='_blank' key={img.url}>
                            <img src={img.imgPath} alt="icon" />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        {new Date().getFullYear()} Adrian | JS Mastery. All rights
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer