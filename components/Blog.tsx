import { useContext, useRef, useEffect, useState } from 'react'
import { ScrollContext } from '../utils/scroll-observer'
import Navbar from './Navbar';
import FeatureCard from '../components/FeatureCard'
interface Post {
    title: string;
    content: string;
  }
  
  const Blog = () => {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)
  
    const numOfPages = 4
    let progress = 0
  
    const [posts, setPosts] = useState<Post[]>([]); // Store all posts
    const [currentPostIndex, setCurrentPostIndex] = useState(0); // Store the index of the current post
  
    useEffect(() => {
      fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@danuuo')
        .then(response => response.json())
        .then(data => {
          const res = data.items
          const posts = res.filter((item: { categories: any[] }) => item.categories.length > 0)
          setPosts(posts) // Set all posts
        });
    }, []);
  
    const handleNextPost = () => {
      setCurrentPostIndex(prevIndex => prevIndex + 1 < posts.length ? prevIndex + 1 : prevIndex);
    }
  
    const handlePrevPost = () => {
      setCurrentPostIndex(prevIndex => prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex);
    }
  
    return (
        <>
            <section className={`w-full bg-white`}>
                <div className="text-4xl lg:text-7xl px-5 font-regular text-black leading-none tracking-tight py-5 lg:py-40 mx-auto max-w-3xl">
                    Blog
                </div>
                {posts.length > 0 && (
                    <div className="post-content text-xl lg:text-xl px-5 font-light text-black leading-none tracking-tight py-0 lg:py-0 mx-auto max-w-3xl">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="font-bold">{posts[currentPostIndex].title}</h2>
                                <p>{new Date(posts[currentPostIndex].pubDate).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <button
                                    onClick={handlePrevPost}
                                    disabled={currentPostIndex === 0}
                                    className={`rounded-lg px-2 py-1 ${currentPostIndex === 0 ? 'bg-gray-500' : 'bg-blue-500'} text-white`}
                                >
                                    Previous
                                </button>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <button
                                    onClick={handleNextPost}
                                    disabled={currentPostIndex === posts.length - 1}
                                    className={`rounded-lg px-2 py-1 ${currentPostIndex === posts.length - 1 ? 'bg-gray-500' : 'bg-blue-500'} text-white`}
                                >
                                    Next
                                </button>
                                {posts.length === 1 && <p style={{ fontSize: 'smaller', color: 'gray' }}>This is the only blog post.</p>}
                            </div> 
                        </div>
                        
                        <div dangerouslySetInnerHTML={{ __html: posts[currentPostIndex].content }} style={{ color: 'black' }} />
                    </div>
                )}
            </section>
        </>
    );
  }
  


export default Blog