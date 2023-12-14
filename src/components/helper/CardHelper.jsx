import './CardHelper.css'

const CardHelper = (props) => {
    const {description, title, image, link} = props;

    return (
        <article className="card_article">
            <a href={link}>
                <img className='card_img' src={image} alt="" />
            </a>
            <div className="card_data">
                <span className="card_description">{description}</span>
                <h2 className="card_title">{title}</h2>
                <a href={link} className='card_button'>Read More</a>
            </div>
        </article>
    )
}

export default CardHelper;