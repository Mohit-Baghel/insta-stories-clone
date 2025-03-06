import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from './App';
import { mockUsers } from './utils/userData';

test('renders user names', () => {
  render(<App />);
  mockUsers.forEach(user => {
    const userNameElement = screen.getByText(user.name);
    expect(userNameElement).toBeInTheDocument();
  });
});

test('renders user stories', () => {
  render(<App />);
  mockUsers.forEach(user => {
    user.stories.forEach(story => {
      const storyElement = screen.getByAltText(`Story ${story.id}`);
      expect(storyElement).toBeInTheDocument();
    });
  });
});

test('renders correct number of users', () => {
  render(<App />);
  const userElements = screen.getAllByTestId('user');
  expect(userElements.length).toBe(mockUsers.length);
});

test('renders correct number of stories for each user', () => {
  render(<App />);
  mockUsers.forEach(user => {
    const userElement = screen.getByText(user.name).closest('[data-testid="user"]') as HTMLElement;
    expect(userElement).not.toBeNull();
    if (userElement) {
      const storyElements = within(userElement).getAllByTestId('story');
      expect(storyElements.length).toBe(user.stories.length);
    }
  });
});