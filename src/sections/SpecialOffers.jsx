import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex flex-wrap justify-center items-center max-xl:flex-col-reverse gap-10 max-container border-t-2 border-coral-red">
      <div className="flex-1">
        <img
          src={offer}
          alt="shoes"
          width={773}
          height={687}
          className="object-contain w-full mt-2"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3"> Special</span>
          Offer Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
         Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button label="Learn More" backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"  />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
