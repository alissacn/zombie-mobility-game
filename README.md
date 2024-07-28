<img width="302" alt="image" src="https://github.com/user-attachments/assets/d61879e8-5b2d-4e08-93e9-2f642585fc43">


## Overview

This project is a conceptual design for a game named "Zombie Mobility" as part of a mentorship task with King and Thu. The main objective was to describe the protagonist and implement a basic backend infrastructure to manage the game's characters.

## Protagonist

The protagonist is Jim, a teenager in a wheelchair navigating through a post-apocalyptic city filled with zombies. This character showcases diversity and highlights the challenges faced by people in wheelchairs, emphasizing the importance of accessibility.

## Technologies Used

- **Backend:** Node.js
- **Database:** MySQL (using Docker for setup)
- **Database Management:** DBeaver
- **To test the endpoints:** Postman

## Endpoints
**Get Character by ID:** 
- **URL:** `/api/character/:id`
- **Method:** `GET`
- **Description:** Returns the characteristics of the protagonist using the ID as a parameter.<BR>

**Get All Characters:**
- **URL:** `/api/character`
- **Method:** `GET`
- **Description:** Returns a list of all characters in the database. <BR>

**Get Items by Character ID:**
- **URL:** `/api/character/:characterId/items`
- **Method:** `GET`
- **Description:** Returns all items associated with the given character ID.
