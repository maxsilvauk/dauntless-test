# Dauntless React, NextJS and TypeScript Test

## Overview

Download or clone this repo.

Install dependencies and run the development server:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Notes

- Used the latest app directory now its stable in the latest version of Next 13.
- Used axios instead of react-query. 
- If I had more time would of tightened up the styling created a theme in tailwind, used react-query it looks pretty good not used it before. Instead of loading the results on each slug currency load when navigating from the list show and hide a component and only load the individual data when the http request for that particular symbol slug was made saving fetch calls. In a perfect world would of used maybe GraphQL to be extra cool if the application was more complex.
- Not used headlessUI for the transition in the loader and used vanilla was saving time.
- Potentially used useContext to pass the data between the page and removed on the back button if it existed in the context etc..

## Thanks for letting be involved in the test for the role!

