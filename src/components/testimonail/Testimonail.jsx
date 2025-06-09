import { assets, testimonialsData } from "../../assets/assets";

const Testimonail = () => {
  return (
    <div
      id="Testimonails"
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonails
        </span>
      </h1>
      <p className="text-center max-w-80 mx-auto text-gray-500 mb-12">
        Real Stories from Those Who Found Home with Us
      </p>
      <div className="flex flex-wrap gap-8 justify-center">
        {testimonialsData.map((testimonail, index) => (
          <div
            key={index}
            className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonail.image}
              alt={testimonail.alt}
            />
            <h2 className="text-xl text-gray-700 font-semibold">{testimonail.name}</h2>
            <p className="text-gray-500 text-sm mb-4">{testimonail.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
                {Array.from({length:testimonail.rating},(item,index)=>(
                    <img key={index} src={assets.star_icon} alt="" />
                ))}
            </div>
            <p className="text-gray-500">{testimonail.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonail;
