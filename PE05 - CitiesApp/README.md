## Input
The user provides two types of input via mobile interface: (1) city name and country in the **AddCity** tab, and (2) country name and currency in the **AddCountry** tab. Each input uses text fields with submit buttons.

## Process
The app uses React Navigation's bottom tab navigator to switch between four screens. It maintains internal state using `useState` hooks for lists of cities and countries. Each submission triggers an `addCity` or `addCountry` function that appends a uniquely identified object to the corresponding array. These arrays are passed as props between components to ensure a unified data structure throughout the app.

## Output
Submitted cities and countries are shown in the **Cities** and **Countries** tabs respectively. Each entry is displayed using a scrollable list with clean formatting. If no entries exist, the app shows a placeholder message. All data persists in memory for the current session.
