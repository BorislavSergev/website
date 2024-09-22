import React from 'react';
import { FaPlay } from 'react-icons/fa'; // Import play icon from react-icons

const Hero = () => {
    return (
        <section className="overflow-hidden bg-[#111111] sm:grid sm:grid-cols-2 sm:items-center">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <header className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                        Вашата платформа за салонни резервации
                    </h2>
                    <p className="hidden text-gray-500 md:mt-4 md:block dark:text-gray-400">
                        SwiftaBook е създадена, за да улесни управлението на резервации за салони. 
                        Наша цел е да осигурим ефективно управление на времето за вашите клиенти. 
                        Лесно проследявайте и управлявайте резервациите си с нашето интуитивно приложение.
                    </p>
                    <div className="mt-4 md:mt-8">
                        <a
                            href="#"
                            aria-label="Свържете се с нас"
                            className="inline-block rounded bg-[#6f60f2] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#5b4ddc] focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Свържете се с нас
                        </a>
                    </div>
                </header>
            </div>
            <img
                alt="Мобилен макет, показващ интерфейса на приложението"
                src="https://reservation.business/wp-content/uploads/2021/11/Group-1349-1.png" // Use a WebP format if available
                loading="lazy" // Lazy load the image
                className="w-64 h-auto mx-auto object-contain sm:rounded-ss-[30px] md:rounded-ss-[60px]"
            />
        </section>
    );
};

export default Hero;
