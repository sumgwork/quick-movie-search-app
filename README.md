# The Movie Search Test, aka Cruise Strikes Back

## SCROLL DOWN FOR SOLUTION NOTES

## The Scenario

You’ve been tasked with creating a single page application, using a frontend technology of your choice, which can list and filter movies provided by a third party API.

### Tech details

Your application should consume the free OMDB API – ​https://www.omdbapi.com/

---

# Solution

## Simulation

Before going through the steps below, it can be handy to have a look at the app [here](https://movie-search-sumit.netlify.app/).

## Setup

Clone the repo from the Github URL, and perform an install using `npm install` or `yarn install` commands to download the dependencies.

Before trying to run the application though, it is important to setup the environment. The required parameter here is OMDB API key. Create a file called `.env` at the root of the project and copy the following line after replacing your API key.

```
REACT_APP_OMDB_KEY=<your_api_key>
```

To execute the application on local environment, please issue `npm start` or `yarn start` commands.

### Browser Support

Application has been tested to be working fine on latest versions of

- Google Chrome
- Mozilla Firefox
- Apple Safari

browsers on **Desktop** only mode. The application hasn't been modified to run as intended on a mobile device though and should be viewed only on a Desktop machine.

## Tech Stack

### Scaffolding

This project has been bootstraped with create-react-app cli.

### Main Libraries

1. **React**: Library of choice.
2. **Axios**: For making API calls. Reason for including Axios was to include an interceptor which injects api key into every api call, and also for some generic error handling.
3. **Styled Components**: For theming and styling.

### Helper Libraries

lodash.debounce (for inducing delay between subsequent API calls)

react-icons (for pagination icons)

## Highlights

> Only functional components, no class based approach.

> Custom React Hook used for fetching Search API data.

> Debouncing API calls to let the user complete typing the input. Saves bandwidth and provides better user experience.

> CSS in JS approach. Used CSS global variables for theming.

> Simple CI/CD implemented using GitHub and Netlify.

## What's not been covered / What can be improved

Since the scope of project wasn't too elaborated, have tried to cover basic stuff while being cautious of time.

- Test coverage for the application is yet to be done.

- Have done only basic styling. The app hasn't been made responsive yet to work on smaller screens. One reason for this was also the lack of mobile wireframes in the brief.

- Server side rendering of the webpages not considered for this demo.

- Containerising the app at this stage would only have been an overkill.
