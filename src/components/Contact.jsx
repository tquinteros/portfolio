import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser"
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.send("service_uzr5mp6", "template_h8z3lne",
    {
      from_name: form.name,
      to_name: "Tomás",
      from_email: form.email,
      to_email: "tomyquinteros494@gmail.com",
      message: form.message
    },
    "AdCt7VEFevS--Rq5j"
    )
    .then(() => {
      setLoading(false)
      alert("Message Sent!")
      setForm({
        name: "",
        email: "",
        message: "",
      }, (error) => {
        setLoading(false)
        console.log(error)
        alert("Error")
      })
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      variants={slideIn("left", "tween", 0.2, 1)}
      >
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Get in touch</p>
        <h3 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Contact.</h3>
        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col '>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col '>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col '>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows={7} name="message" value={form.message} onChange={handleChange} placeholder="What's your message?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <button className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-lg' type='submit' >{loading ? "Sending..." : "Send"}</button>
        </form>
      </motion.div>
      <motion.div
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      variants={slideIn("right", "tween", 0.2, 1)}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")