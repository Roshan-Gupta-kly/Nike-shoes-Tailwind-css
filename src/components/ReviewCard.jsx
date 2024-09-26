import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
       <img src={imgURL} alt="customer" width={70} height={70} className="rounded-full object-cover" />
       <div>
        <img src={star} alt="star" width={24} height={24} className="object-contain m-0" />
       </div>
       <p className="text-lg font-palanquin">({rating})</p>
       <p className="text-center text-xl text-slate-gray font-palanquin">{feedback}</p>
       <h2 className="text-3xl font-montserrat font-bold leading-normal text-coral-red">{customerName}</h2>
    </div>
  )
}

export default ReviewCard
