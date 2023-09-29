import React, { useState, useEffect } from 'react'
import {  BiLogoWhatsapp, BiMailSend, BiLocationPlus } from "react-icons/bi";
import ScrollToTop from '../Utils/ScrolltoTop';
const Contact = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
  
    try {
      const response = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        body: JSON.stringify({
          email,
          name,
          message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const json = await response.json();
  
      if (!response.ok) {
        setError(json.error);
        setIsLoading(false);
        toast.error(error, {
          theme: 'dark',
          position: 'bottom-right',
        });
      }
  
      if (response.ok) {
        setIsLoading(false);
        setEmail('')
        setMessage('')
        setName('')
        toast.success(json.message, {
          theme: 'dark',
          position: 'bottom-right',
        });
      }
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div>
      
    <div className='mt-24 flex flex-col overflow-y-hidden max-w-screen md:flex-row gap-8   font-primary justify-center items-center px-8'>
      

      <div className=' '>
      <h2 className='text-3xl md:text-4xl font-semibold my-4   text-zinc-800'>
        Where to find us ?
        </h2>
        <p className='flex items-center gap-2 py-2' ><BiLogoWhatsapp color='#FF2741' size={20}/>+91 9748534945</p>
          <p  className='flex items-center gap-2 py-2' ><BiMailSend color='#FF2741' size={20}/>flexwave17@gmail.com</p>
          <p className='flex items-center gap-2 py-2 mb-8' ><BiLocationPlus color='#FF2741' size={20}/> 100/2 Bhagabati
          Park, Kolkata 700074</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.7473866332369!2d88.41325451039154!3d22.616865538482752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e1c98bb756d%3A0x70bd3547466235!2sBhagabati%20Park%20Rd%2C%20Vivekananda%20Pally%2C%20Bapuji%20Colony%2C%20Satgachi%2C%20South%20Dumdum%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1695803310595!5m2!1sen!2sin" className='w-[300px] md:w-[400px] h-[400px] border  rounded-xl' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        
        
      </div>

      <div className='w-full flex flex-col items-center  md:w-1/2'>
        <div className=''>
      <h2 className='text-4xl md:text-5xl font-bold my-4   text-zinc-800'>
        Lets work together !
        </h2>
        <div className='text-zinc-700 text-xl font-semibold py-4'>
        <p>We are here to help you <br/>and we'd love to connect with you.</p>

        
        </div>
        </div>
      <form
      onSubmit={handleSubmit}
       className='signup  flex flex-col  justify-center overflow-y-hidden items-center text-black font-primary w-full ' >
      
      
      
        <div className=' bg-gradient-to-b border border-zinc-900  p-0.5  rounded-lg w-full md:w-2/3'>

        <div className='  h-full w-full items-center p-4  back md:p-8 rounded-lg flex flex-col justify-center'>
       
        
        
        
        <div 
        className='flex md:gap-4 flex-col  items-center min-w-full'>

        <div className='my-2 min-w-full'>
        <label className='font-bold text-xl'>Name</label>
        <input type="text"
        className='block min-w-full py-2 placeholder:italic px-4 my-2 border border-zinc-900 rounded-lg '
        placeholder='Full Name'
        name="name"
        onChange={(e)=>setName(e.target.value)} 
        value={name}
        required={true}
        />
        </div>

        <div className='my-2 min-w-full'>
        <label className='font-semibold text-xl'>Email</label>
        <input type="email"
        name="email"
        className='block min-w-full py-2 placeholder:italic px-4 my-2 border border-zinc-900 rounded-lg '
        placeholder='abc@gmail.com'
        onChange={(e)=>setEmail(e.target.value)} 
        value={email}
        required={true}
        />
        </div>

        <div className='my-2 min-w-full'>
        <label className='font-semibold text-xl'>Message</label>
        <textarea type="textarea"
        name="message"
        className='block min-w-full  min-h-[200px] py-2  placeholder:italic px-4 my-2 border border-zinc-900 rounded-lg '
        placeholder='Type your message...'
        onChange={(e)=>setMessage(e.target.value)} 
        value={message}
        required={true}
        />
        </div>
        <button  isLoading={isLoading} className={`${isLoading ? 'cursor-wait' : 'cursor-default'} border bg-zinc-900 px-4 py-4 text-white rounded-xl cursor-pointer`}  >Send Message </button>

        </div>


       

        

      

      
        </div>

        </div>
    </form>
      </div>

    </div>
    <ScrollToTop/>
    </div>
  )
}

export default Contact