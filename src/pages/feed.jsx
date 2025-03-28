import FeedContent from "@/components/content/FeedContent";

export default function Feed() {
  const sample = {
    mediaUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    type: 'video',
    user: { name: "Vedant" },
    caption: 'sample caption',
    likes: 4,
    comments: [],
  }
  return <div>
            <FeedContent {...sample} />
            <FeedContent {...sample} />
            <FeedContent {...sample} />
            <FeedContent {...sample} />
          </div>
}