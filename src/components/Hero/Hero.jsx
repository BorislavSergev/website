import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa'; // Import play icon from react-icons

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePlayButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Handle clicks outside the modal to close it
    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            handleCloseModal();
        }
    };

    return (
        <>
            <section
                className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111b3] to-transparent"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-28 sm:px-6 lg:flex lg:h-[calc(100vh-20px)] lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                            Let us find your
                            <strong className="block font-extrabold text-[#6F60F2]">
                                Forever Home.
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg text-white sm:text-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                            numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center sm:text-left">
                            <a
                                href="#"
                                className="block w-full rounded bg-[#6F60F2] px-12 py-3 text-sm font-medium text-white shadow hover:bg-white hover:text-[#6F60F2] focus:outline-none focus:ring active:bg-[#4C3D9A] sm:w-auto transition-colors"
                            >
                                Get Started
                            </a>

                            <button
                                onClick={handlePlayButtonClick}
                                className="relative block w-full rounded border-2 border-white bg-transparent text-white px-12 py-3 text-sm font-medium shadow hover:bg-white hover:text-[#6F60F2] focus:outline-none focus:ring active:bg-[#5A4CC9] sm:w-auto transition-colors"
                            >
                                <FaPlay
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl transition-colors"
                                />
                                <span className="ml-10">Watch Video</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                    onClick={handleModalClick}
                >
                    <div className="relative bg-white p-4 rounded-lg w-full max-w-3xl">
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 text-white text-2xl hover:text-gray-300"
                        >
                            &times;
                        </button>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Hero;
