import StoryCard from "./StoryCard";

const stories = [
    {
        id: 1,
        name:"Ghritendra Pratap",
        src:"/assets/unsplash-1.jpg",
        profile:"/assets/unsplash-1.jpg",
    },
    {
        id: 2,
        name:"GPS",
        src:"/assets/facebook.png",
        profile:"/assets/facebook.png",
    },
    {
        id: 3,
        name:"Ghritendra Pratap",
        src:"/assets/unsplash-1.jpg",
        profile:"/assets/unsplash-1.jpg",
    },
    {
        id: 4,
        name:"GPS",
        src:"/assets/facebook.png",
        profile:"/assets/facebook.png",
    },
    {
        id: 5,
        name:"Ghritendra Pratap",
        src:"/assets/unsplash-1.jpg",
        profile:"/assets/unsplash-1.jpg",
    },

];

function Stories() {
    return (
    <div className='flex justify-center space-x-3 mx-auto'>
         {stories.map((story) => (
            <StoryCard key={story.id} src = {story.src} name = {story.name} profile = {story.profile}/>
        ))}
    
            </div>
    );
};

export default Stories;