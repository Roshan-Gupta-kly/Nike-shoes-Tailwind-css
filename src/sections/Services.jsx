import ServiceCard from "../components/ServiceCard"
import { services } from "../constants/index"

const Services = () => {
  return (
   <section className="max-container flex justify-center flex-wrap gap-9 border-t-2 border-coral-red">
    {services.map((item) => (
      <ServiceCard {...item}/>
    ))}
   </section>
  )
}

export default Services
