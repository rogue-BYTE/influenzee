import { useEffect, useRef, useState } from "react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

export default function FeedContent({ mediaUrl, type, user, caption, likes, comments }) {
  const [liked, setLiked] = useState(false);
    const videoRef = useRef(null);
  const postRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.5 }
    );
    
    const currentPost = postRef.current;
    if (currentPost) {
      observer.observe(currentPost);
    }
    
    return () => {
      if (currentPost) {
        observer.unobserve(currentPost);
      }
    };
  }, []);
  
  return (
    <div ref={postRef} className="bg-gray-900 text-white shadow-lg w-[60vw] mx-auto p-4">
      {/* User Info */}
      <div className="flex items-center space-x-3 mb-4">
        {user.avatar ? <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" /> : <RxAvatar className="w-8 h-8" /> }
        <h3 className="font-semibold">{user.name}</h3>
      </div>
      
      {/* Media Content */}
      <div className="rounded-lg overflow-hidden">
        {type === "video" ? (
          <video ref={videoRef} className="w-full h-auto" preload="metadata">
            <source src={mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={mediaUrl} alt="Post" className="w-full" loading="lazy" />
        )}
      </div>
      
      {/* Actions */}
      <div className="flex items-center justify-between py-3">
        <div className="flex space-x-4">
          <button onClick={() => setLiked(!liked)}>
            <FaHeart className={`text-xl ${liked ? "text-red-500" : "text-white"}`} />
          </button>
          <FaComment className="text-xl" />
          <FaShare className="text-xl" />
        </div>
      </div>
      
      {/* Likes & Caption */}
      <p className="text-sm text-gray-400">{liked ? likes + 1 : likes} likes</p>
      <p className="mt-2"><span className="font-semibold">{user.name}</span> {caption}</p>
      
      {/* Comments */}
      <p className="text-sm text-gray-400 mt-2">View all {comments.length} comments</p>
    </div>
  );
}