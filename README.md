[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/2JhgCWku)
# MEDP 33100 Project 1: Interactive Storytelling

## Project Overview

I created a interactive storytelling project about a plastic cup in NYC to promote recycling after finishing a drink.  The cup is brought to life and becomes animated and speaks to create a fun imagery and to have the user relate to the cup. The user clicks through the slides which has various animations and audio to guide them through the story. 

## Figma Design

Figma : https://www.figma.com/design/Kz5Fv068fxLo9MOUQu2j17/Project-1?node-id=0-1&t=yO0x9blChf0uglLt-1
I first began by creating a rough wireframe of the concept I had in mind of each scene. Then I thought about what objects I wanted to be animated using gsap and wrote down any interactive elements. 

## Features

- List the key features of the project, including:
    - **Animations**: .
    - Animation to move to the next slide on gsap. 
    - I applied gsap texting animation for the cup's dialogue.
    - Bubble tea animation. One slide with mouse hover interaction. Another slide with the boba pearls traveling up a straw and fading away.
    - Animation of claw holding the cup over a trash can, rotating on a loop.
    - The cup rotating and going downward as if it is falling down. It disappears on complete.
    - Animation of feet walking across screen with gsap. 
    - **Sound Effects**:
    - I created an option for intro music at the very beginning to set the mood of joy, fades after 25 seconds for most of the beginning slides.
    -Footstep sound effect for the 5th index, because it is a close up scene, the footsteps feel more immersive.
    - fire sound effect for when the cup falls into fire. It plays a few second into the next slide which is just text. I think sound in this scene makes it more immersive.
    - I added a funky joyful audio track to the last slide. This helps emphasize the point of my project, and to wrap things up on a happier note. 
      
    - **User-triggered Events**:
    - Gsap mouse hover animation for the boba pearls in the cup.
    - The trash pick up claw is draggable by the user.
    - The user can click on the title screen for audio to enable. 
    - **Responsive Design**:
    - I used rem for font sizes so they can be adjusted to any screen size.
    - I used viewheight, viewwidth, and percentages for sizing.
    - Adjusted elements for 700px mobile size screens.
    - Adjusted elements for 1024px tablet size screens. 

## Technologies Used

- List the technologies and tools used in the project:
    - **Languages**: HTML, CSS, JavaScript
    - **Libraries**:GSAP for animations
    - **Other**: GitHub Pages for hosting, Figma for design, Adobe Photoshop 

## Live Demo

- Include a link to the live version of the project hosted on GitHub Pages.

## Credits

- List any third-party assets used in the project (e.g., sound effects, images, fonts) and provide proper attribution.
- Acknowledge any resources, tutorials, or references you used to help complete the project.

Anika for being in the photographs. 
Pixabay free images and audio. https://pixabay.com/
Google fonts - Gloria Halleujah
Gsap community forums https://gsap.com/community/
W3 schools tutorials for CSS, Javascript, HTML https://www.w3schools.com/
Geeks for Geeks javascript examples. https://www.geeksforgeeks.org/javascript-examples/
SheCodes javascript examples https://www.shecodes.io/athena/2400-writing-javascript-code-examples-and-tutorials


## Future Enhancements
1. Fix replaying errors of animations. My code right now is meant to be experienced in one direction. I would like to enhance the user ability to replay animations when going back. 
2. Fix resizing on smaller screens. Since the background of my project are rectangular pngs. I want to work on a better experience for mobile viewers by working on resizing and considering the placements of objects. 
