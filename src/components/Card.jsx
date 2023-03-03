import '../style/components/Card.css'

function Card({ title }) {
    return (
        <div className='card_item'>
            <span className='card_title'>{ title }</span>
        </div>
    )
}

export default Card