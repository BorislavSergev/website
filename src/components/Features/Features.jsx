import React from 'react';

const featuresData = [
    {
        title: "Дигитални кампании",
        description: "Лесно стартирайте и управлявайте рекламни кампании, за да привличате нови клиенти и да увеличавате приходите на салона.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-[#6F60F2]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
            </svg>
        ),
    },
    {
        title: "Управление на резервации",
        description: "Лесно проследявайте и управлявайте всички резервации на клиентите си в един интуитивен интерфейс.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-[#6F60F2]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path d="M12 2l9 9-9 9-9-9 9-9z" />
                <path d="M12 6l3 3-3 3-3-3 3-3zm0 12l3-3-3-3-3 3 3 3z" />
            </svg>
        ),
    },
    {
        title: "Напомняния за резервации",
        description: "Автоматизирайте напомнянията, за да гарантирате, че клиентите никога няма да пропуснат своята среща.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-[#6F60F2]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                {/* Insert relevant SVG for this feature */}
                <path d="M12 2l9 9-9 9-9-9 9-9z" />
            </svg>
        ),
    },
    {
        title: "Работно време",
        description: "Управлявайте работното си време и настройте наличността си, за да оптимизирате резервациите.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-[#6F60F2]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                {/* Insert relevant SVG for this feature */}
                <path d="M12 2l9 9-9 9-9-9 9-9z" />
            </svg>
        ),
    },
    {
        title: "Управление на клиентите",
        description: "Съхранявайте информация за клиентите и проследявайте тяхната история на резервации, за да предлагате персонализирано обслужване.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-[#6F60F2]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z" />
            </svg>
        ),
    },
    {
        title: "Поддръжка на AI",
        description: "Искусственият интелект ще отговаря на обаждания от клиенти, като осигурява бърза и ефективна помощ.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-[#6F60F2]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z" />
            </svg>
        ),
    },
];

const Features = () => {
    return (
        <section className="bg-[#111111] text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">Започнете своя маркетинг</h2>
                    <p className="mt-4 text-gray-300">
                        SwiftaBook предлага мощни инструменти за управление на резервации и маркетинг за салони. 
                        С нашата платформа можете лесно да проследявате резервациите си и да управлявате работното си време, 
                        за да осигурите най-доброто обслужване на клиентите си.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {featuresData.map((feature, index) => (
                        <a
                            key={index}
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-[#6F60F2]/10 hover:shadow-[#6F60F2]/10"
                            href="#"
                            aria-label={feature.title} // Improve accessibility
                        >
                            {feature.icon}
                            <h2 className="mt-4 text-xl font-bold text-white">{feature.title}</h2>
                            <p className="mt-1 text-sm text-gray-300">{feature.description}</p>
                        </a>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="#"
                        className="inline-block rounded bg-[#6F60F2] px-12 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#6F60F2] focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                        Започнете днес
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Features;
