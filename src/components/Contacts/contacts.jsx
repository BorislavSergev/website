import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_ur4bv9r',
            'template_23spf4c',
            formData,
            '4QbCINfOlJtYBikng'
        )
            .then((result) => {
                console.log(result.text);
                setSubmitted(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="bg-[#111111] text-white font-open-sans">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <h2 className="text-3xl font-bold sm:text-4xl">Kickstart your marketing</h2>
                        <p className="max-w-xl text-lg mt-5">
                            At the same time, the fact that we are wholly owned and totally independent from
                            manufacturer and other group control gives you confidence that we will only recommend what
                            is right for you.
                        </p>

                        <div className="mt-8">
                            <a href="#" className="text-2xl font-bold text-[#6f60f2]"> 0151 475 4450 </a>
                            <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
                        </div>
                    </div>

                    <div className="rounded-lg bg-[#111111] p-8 shadow-lg lg:col-span-3 lg:p-12">
                        {submitted ? (
                            <p className="text-center">Thank you! Your message has been sent.</p>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="relative">
                                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6f60f2]" />
                                        <input
                                            className="w-full rounded-lg border border-[#1e1e1e] bg-[#1e1e1e] pl-10 p-3 text-sm text-white focus:border-[#6f60f2] focus:ring-2 focus:ring-[#6f60f2]"
                                            placeholder="First Name"
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="relative">
                                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6f60f2]" />
                                        <input
                                            className="w-full rounded-lg border border-[#1e1e1e] bg-[#1e1e1e] pl-10 p-3 text-sm text-white focus:border-[#6f60f2] focus:ring-2 focus:ring-[#6f60f2]"
                                            placeholder="Last Name"
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6f60f2]" />
                                    <input
                                        className="w-full rounded-lg border border-[#1e1e1e] bg-[#1e1e1e] pl-10 p-3 text-sm text-white focus:border-[#6f60f2] focus:ring-2 focus:ring-[#6f60f2]"
                                        placeholder="Email address"
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6f60f2]" />
                                    <input
                                        className="w-full rounded-lg border border-[#1e1e1e] bg-[#1e1e1e] pl-10 p-3 text-sm text-white focus:border-[#6f60f2] focus:ring-2 focus:ring-[#6f60f2]"
                                        placeholder="Phone Number"
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <textarea
                                        className="w-full h-32 rounded-lg border border-[#1e1e1e] bg-[#1e1e1e] pl-3 p-3 text-sm text-white focus:border-[#6f60f2] focus:ring-2 focus:ring-[#6f60f2] resize-none"
                                        placeholder="Message"
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-[#6f60f2] px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Send Enquiry
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
