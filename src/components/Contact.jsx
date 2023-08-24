'use client';
import toast from "react-hot-toast";
import { useState } from "react";

const Contact = () => {

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleContact = (e) => {
    e.preventDefault();
    if (submitted === false) {
      

      // console.log("sending");
      
        if (!name || !email || !message) {
          toast.error("Please fill in all fields.");
          return;
        }

        if (!name || !message) {
          toast.error("Please fill in all fields.");
          return;
        }
    
        if (!isValidEmail(email)) {
          toast.error("Please enter a valid email address.");
          return;
        }
        
        setSubmitted(true);

      let data = {
        name,
        email,
        message,
      };

      // console.log(data)
      const wait = fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          // console.log('Response received')
          if (res.status === 200) {
            // console.log('Response succeeded!',res)
            setSubmitted(true);
            setName("");
            setEmail("");
            setMessage("");
            // toast.success('Mail Sent!')
            setSubmitted(false);
          }else{
            toast.error(res.message);
          }
        })
        .catch((error) => {
          toast.error("An error occurred. Please try again later.");
        });

      toast.promise(wait, {
        loading: "Sending",
        success: "Mail Sent",
        error: "Some Error Occur",
      });
    
    } else {
      toast.error("Wait!");
    }
  };

  return (
    <div id="contact" className="flex bg-fixed bg-[url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80')] bg-no-repeat bg-cover justify-center">
      <div className="bg-white md:m-24 m-8 py-10 px-10 sm:px-72 sm:py-20 md:px-72 md:py-20 flex flex-col justify-between items-center bg-opacity-50 rounded-3xl">
        <p className="text-black md:text-5xl text-3xl font-bold bold mb-6 mt-0 pointer-events-none">
          Contact Me
        </p>
        <form
          className="flex flex-col justify-around items-center"
          action=""
          method=""
        >
          <label htmlFor="name" className="text-black m-2">
            Name
          </label>
          <input
            required
            className="rounded-xl md:h-8 border-2 h-8 text-black border-gray-400"
            value={name}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            id="name"
            placeholder="Name"
          />
          <label htmlFor="email" className="text-black m-2">
            Email
          </label>
          <input
            required
            type="email"
            className="rounded-xl h-8 md:h-8 text-black border-2 border-gray-400"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            id="email"
            placeholder="Email"
          />
          <label htmlFor="message" className="text-black m-2">
            Message
          </label>
          <textarea
            required
            className="rounded-xl md:h-24 w-56 h-24 md:w-56 text-black border-2 border-gray-400"
            value={message}
            name="message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            id="message"
            placeholder="Message"
          ></textarea>
          <button
            className="m-2 my-4 mb-0 border-2 border-black text-black hover:text-white  p-4 py-2 rounded-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-600 hover:font-bold"
            onClick={(e) => {
              handleContact(e);
            }}
            type="submit"
          >
            {submitted === false ? "Submit" : "Sending"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
