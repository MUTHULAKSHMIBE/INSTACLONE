// Home.js

import React, { useState } from 'react';
import './Home.css';
import Post from './Post';
import Suggestions from './Suggestions';
import Sidenavbar from './Sidenavbar';

const Home = () => {
  const [posts, setPosts] = useState([
    {
      user: "KALA",
      postImage: "https://images8.alphacoders.com/103/thumbbig-1036424.webp",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "Radhika",
      postImage: "https://images2.alphacoders.com/103/thumbbig-1036385.webp",
      likes: 20,
      timestamp: "1d",
    },
    {
      user: "Aarazo kurna",
      postImage: "https://images8.alphacoders.com/130/thumbbig-1302793.webp",
      likes: 40,
      timestamp: "2d",
    },
    {
      user: "kobee_18",
      postImage: "https://images6.alphacoders.com/484/thumbbig-484749.webp",
      likes: 14,
      timestamp: "2hr",
    },
  ]);

  
  const storyData = [
    { user: "User1", image: 'https://pxbar.com/wp-content/uploads/2023/09/hide-face-girl-pic.jpg' },
    { user: "User2", image: "https://pxbar.com/wp-content/uploads/2023/09/girls-insta-dp.jpg" },
    { user: "User3", image: "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-beautiful-girl-with-beautiful-flowers-on-her-head-image_2916531.jpg" },
    { user: "User4", image: "https://pxbar.com/wp-content/uploads/2023/09/stylish-girl-pic-with-attitude-hidden-face-1.jpg" },
    { user: "User5", image: "https://pxbar.com/wp-content/uploads/2023/09/instagram-profile-picture-for-girls-1.jpg" },
    
    
  ];

  return (
    <div className='home'>
      <div className="row">
        <div className="col-lg-2 ">
          <div className='home-navigation'>
            <Sidenavbar/>
          </div>
        </div>

        
        <div className="col-lg-7">
          <div className='story-images bg-white '>
            
            {storyData.map((story, index) => (
              <img key={index} src={story.image} alt={story.user} />
            ))}
          </div>
          <div className="home-timeline mt-5">
            <div className="timeline__posts">
              {posts.map((post, index) => (
                <Post
                  key={index}
                  user={post.user}
                  postImage={post.postImage}
                  likes={post.likes}
                  timestamp={post.timestamp}
                />
              ))}
            </div>
          </div>
        </div>

       
        <div className="col-lg-3 mt-5">
          <div className="home-suggestion d-none d-sm-inline">
            <Suggestions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;