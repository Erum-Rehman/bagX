import ReactStars from 'react-rating-stars-component';

const Rating = () => {
    return(
        <>
            <div>
                <ReactStars activeColor='#f96822' size={20} isHalf={true}
                count={5} 
                 />
            </div>
        </>
    )
}
export default Rating