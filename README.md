---
difficulty: 1
chapter: "Chapter 1: Vue.js Essentials"
training: true
tags: vue
---

# Create a Movie Rating App

# Challenge Description

Your task is to create a Movie Rating App using Vue.js 3.
During this challenge, we’ll code out the following features:

- Rendering a list of movies.

## Requirements

- Define the movies as reactive data.
- Use the Vue.js template syntax to display the movie information.
- Render all the movies with a `v-for` loop.
- Display the name, description, genres, and image of each movie.
- Display the movie rating as stars, with a maximum of 5 stars

## Other Considerations

- If you see the `data-test` attribute anywhere in the boilerplate don't remove it.
- TailwindCSS is preinstalled with the default config. It might be helpful for you, if you want to have some styles. (Not obligatory)

> 😀 The movie list is provided as boilerplate, but feel free to add your favorite one into the list.

> 👀 Don't peek at the solution until you've solved the exercise yourself or exhausted your resources. Challenging yourself will best prepare you for the exam

## Example of Finished App

This is an example of what the functionality should look like for the completed exercise. If you’d like to mimic this style, feel free to do so, but it is not required.

![Finished app in this challenge](https://i.imgur.com/HV3dXET.png)

Challenge Description
In this challenge, let's give users the ability to add new movies in the Movie Rating App.

Requirements
Create an "Add Movie" button `DONE`
Show a form for creating new movies when the button is clicked
Include the following fields on the form:
Name: text input & required
Description: textarea
Image: text input
Genre: dropdown & required & user can select multiple
Is in theaters: checkbox
Validate the form on submit
Once submitted and valid, add the movie to the list
Clear and hide the form after the movie is added
Add a cancel button to the form
Clicking the cancel button should clean up the form, and any error that it might have.
Clicking the cancel button should hide the form for the user.
💡 HINT: You can make up any genres you like

💡 HINT: You can visit imdb.com to find movie descriptions, images, etc for testing your form

Here are my suggestions for implementation. Would you like me to guide you through:

Adding validation handling and error display?
Implementing proper cancel functionality?
Adding form reset functionality?
Improving the buttons styling to match your MainButton component?

Which of these areas would you like to tackle first?
Also, I notice you're displaying selected genres below the select. Would you like to:

Keep this display but style it better with pills similar to your MovieCard?
Or handle the multiple select display differently?
