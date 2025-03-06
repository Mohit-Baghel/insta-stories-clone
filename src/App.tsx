import React, { useState, useEffect } from "react";
import "./App.css";
import { mockUsers } from "./utils/userData";

interface Story {
  id: number;
  imageUrl: string;
}

interface User {
  id: number;
  name: string;
  stories: Story[];
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUserIndex, setCurrentUserIndex] = useState<number | null>(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState<number>(0);


  useEffect(() => {
    setUsers(mockUsers);
  }, []);

  
  const handleUserClick = (userIndex: number) => {
    setCurrentUserIndex(userIndex);
    setCurrentStoryIndex(0); 
  };

 
  const handleNext = () => {
    if (currentUserIndex !== null) {
      const currentUser = users[currentUserIndex];
      if (currentStoryIndex < currentUser.stories.length - 1) {
        setCurrentStoryIndex(currentStoryIndex + 1); 
      } else {
        setCurrentUserIndex(null); 
      }
    }
  };

  const handlePrevious = () => {
    if (currentUserIndex !== null && currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  const handleClose = () => {
    setCurrentUserIndex(null);
  };

  useEffect(() => {
    if (currentUserIndex === null) return;

    const timer = setTimeout(() => {
      handleNext();
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [currentUserIndex, currentStoryIndex]);

  return (
    <div className="app">
      <div className="insta-wrapper">
        <h1>Instagram Stories</h1>
        <div className="story-list">
          {users.map((user, userIndex) => (
            <div key={user.id} className="user-story">
              <img
                src={user.stories[0].imageUrl} 
                alt={`${user.name}'s story`}
                className="story-thumbnail"
                onClick={() => handleUserClick(userIndex)}
              />
              <p>{user.name}</p>
            </div>
          ))}
        </div>

        {currentUserIndex !== null && (
          <div className="story-viewer">
            <img
              src={users[currentUserIndex].stories[currentStoryIndex].imageUrl}
              alt={`Story ${users[currentUserIndex].stories[currentStoryIndex].id}`}
              className="story-image"
            />
            <div className="navigation-left" onClick={handlePrevious} />
            <div className="navigation-right" onClick={handleNext} />
            <button className="close-button" onClick={handleClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
