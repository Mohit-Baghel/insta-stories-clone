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
  const [progress, setProgress] = useState<number>(0); // Progress bar state

  useEffect(() => {
    setUsers(mockUsers);
  }, []);

  const handleUserClick = (userIndex: number) => {
    setCurrentUserIndex(userIndex);
    setCurrentStoryIndex(0); // Reset to the first story of the selected user
    setProgress(0); // Reset progress bar
  };

  const handleNext = () => {
    if (currentUserIndex !== null) {
      const currentUser = users[currentUserIndex];
      if (currentStoryIndex < currentUser.stories.length - 1) {
        // Move to the next story of the current user
        setCurrentStoryIndex(currentStoryIndex + 1);
        setProgress(0); // Reset progress bar for the next story
      } else {
        // Move to the next user
        if (currentUserIndex < users.length - 1) {
          setCurrentUserIndex(currentUserIndex + 1);
          setCurrentStoryIndex(0); // Reset to the first story of the next user
          setProgress(0); // Reset progress bar
        } else {
          // If it's the last user, close the story viewer
          setCurrentUserIndex(null);
        }
      }
    }
  };

  const handlePrevious = () => {
    if (currentUserIndex !== null) {
      if (currentStoryIndex > 0) {
        // Move to the previous story of the current user
        setCurrentStoryIndex(currentStoryIndex - 1);
        setProgress(0); // Reset progress bar
      } else {
        // Move to the previous user
        if (currentUserIndex > 0) {
          const previousUser = users[currentUserIndex - 1];
          setCurrentUserIndex(currentUserIndex - 1);
          setCurrentStoryIndex(previousUser.stories.length - 1); // Move to the last story of the previous user
          setProgress(0); // Reset progress bar
        }
      }
    }
  };

  const handleClose = () => {
    setCurrentUserIndex(null);
  };

  // Effect to update the progress bar
  useEffect(() => {
    if (currentUserIndex === null) return;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          handleNext(); // Move to the next story when progress reaches 100%
          return 0;
        }
        return prevProgress + 1; // Increment progress by 1% every 50ms
      });
    }, 50); // Adjust the interval for smoother or faster progress

    return () => clearInterval(interval);
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
            {/* User Name */}
            <div className="story-header">
              <h6>{users[currentUserIndex].name}</h6>
            </div>

            {/* Progress Bar */}
            <div className="progress-bar-container">
              {users[currentUserIndex].stories.map((story, index) => (
                <div
                  key={story.id}
                  className="progress-bar"
                  style={{
                    width: `${(100 / users[currentUserIndex].stories.length)-2}%`,
                  }}
                >
                  <div
                    className="progress"
                    style={{
                      width:
                        index === currentStoryIndex
                          ? `${progress}%`
                          : index < currentStoryIndex
                          ? "100%"
                          : "0%",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Story Image */}
            <img
              src={users[currentUserIndex].stories[currentStoryIndex].imageUrl}
              alt={`Story ${users[currentUserIndex].stories[currentStoryIndex].id}`}
              className="story-image"
            />

            {/* Navigation Buttons */}
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