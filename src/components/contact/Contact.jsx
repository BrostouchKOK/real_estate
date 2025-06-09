import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1da9a94f-77e2-46d6-ac33-7f750a349650");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Email Send Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.error)
      setResult("");
    }
  };

  return (
    <div
      id="Contact"
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          with Us
        </span>
      </h1>
      <p className="text-center max-w-80 mx-auto text-gray-500 mb-12">
        Ready to Make a Move? Let'st Build Your Furture Together
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              required
            />
          </div>
        </div>
        <div className="mt-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 h-48 resize-none"
            name="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button type="submit" className="block mt-5 mx-auto px-12 py-2 bg-blue-500 rounded text-white mb-12">
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
