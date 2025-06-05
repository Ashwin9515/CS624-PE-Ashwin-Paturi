## Input
Users interact with the app through four primary tabs: Cities, Add City, Add Country, and CountriesNav. In the "Add City" and "Add Country" sections, users enter data such as city names, country names, and currencies. This information is passed through form components and stored in the state using React's useState via CitiesContext and CountriesContext.

## Process
The app uses React Navigation to manage both tab and stack navigators. When users navigate through CitiesNav or CountriesNav, stack-based screens, such as City, Country, and Currency, are rendered. The app uses lazy loading (React.lazy) to optimize performance, and the state contexts dynamically update the UI. Navigation between screens is based on user input, with route parameters passing selected objects (e.g., a country).

## Output
Users receive a structured display of all cities and countries they have added. Each selection leads to detailed views, such as country information and associated currency, improving usability and interactivity.