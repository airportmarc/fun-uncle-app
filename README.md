This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Anwesome spotify thing-a-ma-bob

Site is hosted at 
https://fun-uncle.marcwitney.com


Welcome to spotify thing-a-ma-bob, this is a silly site that combines a few technologies 
I have not used before.  Specifically, Hooks, and OAuth.  

I wanted to combine a few of these things in the project, as they were on my list 
to explore and thought this was a good a time as any.

A few notes:
- This is actually my first react project from scracth.  All other projects have been Vue, or an already created react
 project.  So, i kept the folder structure generally as I found it.
 - Commit history.  Is not the cleanest.  I was making the project up kinda on the fly, so commits were not as clean
 and 'story' like as I would have hoped.  
 


Functionality:
- You will need a spotify account to login, then once logged in it will show random list of 5 catorgories.
- Click any one, which will bring you to a list of 5 playlists within that catorgoy.
- Click the playlist, to obtain a list of 10 songs from that playlist. 
- You will notice a fire emjoi.  This is placed next to the song with the highest popularity rating within the list
- Also a check mark.  This is clickable (Nothing fancy happens, just 'saves' the song)
- Clicking the play button should open spotify, and play the song. 

There are a few little hacks in here, for both time reasons, and because not using a global store. But I added little comments where

