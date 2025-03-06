import {
  story1,
  story2,
  story3,
  story4,
  story5,
  story6,
  story7,
  story9,
  story10,
  story11,
  story12,
  story13,
} from "./utils";

export const mockUsers = [
    {
      id: 1,
      name: "User 1",
      stories: [
        { id: 1, imageUrl: story1 },
        { id: 2, imageUrl: story2 },
      ],
    },
    {
      id: 2,
      name: "User 2",
      stories: [
        { id: 3, imageUrl: story7 },
        { id: 4, imageUrl: story9 }, 
      ],
    },
    {
      id: 3,
      name: "User 3",
      stories: [
        { id: 5, imageUrl: story10 },
        { id: 6, imageUrl: story11 },
      ],
    },
    {
        id: 4,
        name: "User 4",
        stories: [
          { id: 5, imageUrl: story12 },
          { id: 6, imageUrl: story13 },
        ],
      },
      {
        id: 5,
        name: "User 5",
        stories: [
          { id: 5, imageUrl: story4 },
          { id: 6, imageUrl: story3 },
        ],
      },
  ];