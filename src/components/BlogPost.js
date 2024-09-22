// src/components/BlogPost.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ArticleHero from './ArticleHero/ArticleHero';

const BlogPost = () => {
    const { slug } = useParams(); // Get the slug from the URL
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:5000/posts?slug=${slug}`);
                const data = await response.json();
                setPost(data[0]); // Get the first item from the array
            } catch (error) {
                setError(error.message);
            }
        };
        fetchPost();
    }, [slug]);

    if (error) return <div>Error: {error}</div>;
    if (!post) return <div>Loading...</div>;

    // Set up title and meta information for SEO
    const pageTitle = `Blog - ${post.title}`;
    const metaDescription = post.description || `Научи повече за ${post.title}. В статията съдържа ${post.keywords.join(', ')} and more.`;
    const metaKeywords = post.keywords ? post.keywords.join(', ') : 'blog, article, post';

    return (
        <div>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={metaKeywords} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content={post.imageUrl || 'default-image-url.jpg'} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={metaDescription} />
            </Helmet>

            <ArticleHero post={post} />
        </div>
    );
};

export default BlogPost;
