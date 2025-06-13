import TitleHeader from '../components/TitleHeader'
import ContactExperience from '../components/Models/contact/ContactExperience'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {

    const formRef = useRef(null);

    const [formData, setformData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setloading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        });
    };

    const handlesubmit = async (e) => {
        e.preventDefaults();
        setloading(true);

        try {
            await emailjs.sendForm(
                // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                // import.meta.env.VITE_APP_EMAILJS_PUBLIC_ID,
            )

            setformData({ name: '', email: '', message: '' })
        } catch (error) {
            console.log("EmailJS error", error)
        } finally {
            setloading(false)
        }

    }

    return (
        <section id='contact' className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">

                <TitleHeader title="Have questions or ideas? Let's talk!"
                    sub="Get in Touch - Let's Connect" />

                <div className="mt-16 grid-12-cols">

                    <div className="xl:col-span-5">
                        <div className='flex-center card-border rounded-xl p-10'>

                            <form onSubmit={handlesubmit} className='w-full flex flex-col gap-7' ref={formRef}>
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name='name' id='name' placeholder='Your name' value={formData.name} onChange={handleChange} required />
                                </div>

                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name='email' id='email' placeholder='Your email address' value={formData.email} onChange={handleChange} required />
                                </div>

                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea type="message" name='message' id='message' rows="5" placeholder='Your message' value={formData.message} onChange={handleChange} required></textarea>
                                </div>

                                <button type='submit' disabled={loading}>
                                    <div className='cta-button group'>
                                        <div className="bg-circle" />
                                        <p className='text'>{loading ? 'Sending...' : 'Send Message'}</p>
                                        <div className='arrow-wrapper'>
                                            <img src="./images/arrow-down.svg" alt="arrow" />
                                        </div>
                                    </div>
                                </button>

                            </form>
                        </div>
                    </div>

                    {/* 3D Expercience Model for contact Right-side  */}
                    <div className='xl:col-span-7 min-h-96'>
                        <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
                            <ContactExperience />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact