import './CardHelper.css'
import { Link } from 'react-router-dom';

const CardHelper = (props) => {
    const {title, link, description, image} = props;

    return (
        <article className="card_article">
            <Link to={link}>
                <img className='card_img' src={image} alt="" />
            </Link>
            <div className="card_data">
                <span className="card_description">{description}</span>
                <h2 className="card_title">{title}</h2>
                <Link to={link} className='card_button'>Read More</Link>
            </div>
        </article>
    )
}

export default CardHelper;
