import React, { useState } from 'react';

const BlogCard = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 xlg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-10 ml-10 mr-10">
                <article
                    className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25"
                >
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        className="h-56 w-full object-cover"
                    />

                    <div className="bg-[#1e1e1e] p-4 sm:p-6">
                        <time datetime="2022-10-10" className="block text-xs text-gray-500 dark:text-gray-400">
                            10th Oct 2022
                        </time>

                        <a href="#">
                            <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                                How to position your furniture for positivity
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                            mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                            dignissimos. Molestias explicabo corporis voluptatem?
                        </p>
                    </div>
                </article>
                
            </div>
        </>
    );
};

export default BlogCard;
