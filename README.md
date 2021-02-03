# Youtube Randomizer

https://ytrandomizer.netlify.app

A react web app which uses the Youtube API to play random videos.

The videos are chosen by using the API search function. The search is made using a random word picked out from a text file.
The user can set different filters to limit the type of video they want to see. Currently you can set the video category, upload date, and video length.

The Youtube API has a very strict quota, allowing the website to only find 100 random videos each day, so if a video is not loading this is likely the cause.
