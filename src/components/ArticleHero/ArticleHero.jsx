import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock } from 'react-icons/fa';

const ArticleHero = ({ post }) => {
    if (!post) return null;

    const postedTime = new Date(post.createdAt);
    const formattedTime = postedTime.toLocaleDateString() + ' ' + postedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Extract the first letter of the first word from the content text (ignoring HTML tags)
    const contentText = post.content.replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags to manipulate the first word
    const firstSpaceIndex = contentText.indexOf(' ');
    const firstLetter = contentText.charAt(0); // Get the first letter
    const restOfWord = firstSpaceIndex !== -1 ? contentText.substring(1, firstSpaceIndex) : ''; // Get the rest of the first word
    const remainingContent = firstSpaceIndex !== -1 ? contentText.substring(firstSpaceIndex + 1) : ''; // Get remaining content after the first word

    return (
        <>
            <section
                className="relative bg-[url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center bg-no-repeat rounded-lg mt-0 mx-auto my-8"
                style={{ height: '300px' }}
            >
                <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
                <div className="relative flex flex-col items-center justify-center h-full">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center px-4">
                        {post.title}
                    </h1>
                    <p className="mt-2 text-white text-center">
                        blog /{' '}
                        <Link to={`/category?category=${post.category}`} className="underline text-white hover:text-gray-300">
                            {post.category}
                        </Link>
                    </p>
                </div>
            </section>

            <div className="mx-auto max-w-screen-xl text-white font-open-sans">
                <div className="flex items-center text-[#e0e3e7] font-medium mb-4">
                    <FaClock className="mr-2" />
                    <span>{formattedTime}</span>
                </div>
                
                {/* Render the entire content preserving HTML structure */}
                <div className="mt-4 text-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </>
    );
};

export default ArticleHero;
