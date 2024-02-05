import { useContext, useRef, useEffect, useState } from 'react';
import { ScrollContext } from '../utils/scroll-observer';
import Navbar from './Navbar';
import FeatureCard from '../components/FeatureCard';

interface Post {
    title: string;
    content: string;
    pubDate: string; // Added 'pubDate' property
}

const Blog = () => {
    const { scrollY } = useContext(ScrollContext);
    const refContainer = useRef<HTMLDivElement>(null);

    const numOfPages = 4;
    let progress = 0;

    const [posts, setPosts] = useState<Post[]>([]); // Store all posts
    const [currentPostIndex, setCurrentPostIndex] = useState(0); // Index of the current post
    const [isFullPostVisible, setIsFullPostVisible] = useState(false); // NEW: State to control visibility of full post

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@danuuo')
            .then(response => response.json())
            .then(data => {
                const res = data.items;
                const posts = res.filter((item: { categories: any[] }) => item.categories.length > 0);
                setPosts(posts); // Set all posts
            });
    }, []);

    const handleNextPost = () => {
        setCurrentPostIndex(prevIndex => prevIndex + 1 < posts.length ? prevIndex + 1 : prevIndex);
        setIsFullPostVisible(false); // Reset visibility for the next post
    };

    const handlePrevPost = () => {
        setCurrentPostIndex(prevIndex => prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex);
        setIsFullPostVisible(false); // Reset visibility for the previous post
    };

    // Function to handle redirect or expand post
    const handleReadMore = () => {
        // Example redirect to Medium, replace with your desired behavior
        window.location.href = `https://medium.com/@danuuo/${posts[currentPostIndex].title.replaceAll(' ', '-')}`;
    };

    return (
        <>
            <section className={`w-full bg-white`}>
                <div className="text-4xl lg:text-7xl px-5 font-regular text-black leading-none tracking-tight py-5 lg:py-40 mx-auto max-w-3xl">
                    Blog
                </div>
                {posts.length > 0 && (
                    <div className="post-content text-xl lg:text-xl px-5 font-light text-black leading-none tracking-tight py-0 lg:py-0 mx-auto max-w-7xl">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="font-bold">{posts[currentPostIndex].title}</h2>
                                <p>{new Date(posts[currentPostIndex].pubDate).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <button
                                    onClick={handlePrevPost}
                                    disabled={currentPostIndex === 0}
                                    className={`rounded-lg px-2 py-1 ${currentPostIndex === 0 ? 'bg-gray-900' : 'bg-gray-500'} text-white`}
                                >
                                    Previous
                                </button>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <button
                                    onClick={handleNextPost}
                                    disabled={currentPostIndex === posts.length - 1}
                                    className={`rounded-lg px-2 py-1 ${currentPostIndex === posts.length - 1 ? 'bg-gray-900' : 'bg-gray-500'} text-white`}
                                >
                                    Next
                                </button>
                                {posts.length === 1 && <p style={{ fontSize: 'smaller', color: 'gray' }}>This is the only blog post.</p>}
                            </div>
                        </div>
                        
                        <div className={`content ${isFullPostVisible ? '' : 'blur-content'}`} dangerouslySetInnerHTML={{ __html: posts[currentPostIndex].content }} />
                        <a href={`https://medium.com/@danuuo/${posts[currentPostIndex].title.replaceAll(' ', '-')}`} className="read-more-button">
                            <strong>Read more on Medium @danuuo</strong>
                        </a>
                    </div>
                )}
            </section>
            <style jsx>{`
                .blur-content {
                    overflow: hidden;
                    mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
                    -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
                    max-height: 100rem; /* Adjust based on your needs */
                }
                .read-more-button {
                    display: block;
                    width: 100%;
                    text-align: center;
                    margin-top: -4rem; /* Adjust to ensure button overlaps the blur effect */
                    padding: 1rem;
                    background-color: #fff;
                    border: none;
                    font-size: 1rem;
                    color: #000;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
};

export default Blog;
