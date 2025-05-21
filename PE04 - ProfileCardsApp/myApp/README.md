# PE04 – Profile Cards

## Input
The app utilizes an existing list of six user profiles, with each containing a name, title, description, and a collapsed property. It also involves loading the static image of the assets folder (`user.png`). All these inputs serve as the source in producing the profile cards visible in the grid layout of the app's interface on all platforms.

## Process
The application is developed using React Native and TypeScript, and state is managed by utilizing hooks. By clicking on a profile card, `collapsed` state is changed by using `immutability-helper`. Conditional rendering is utilized to open or close the card. Styles are managed by another `styles.tsx` file by utilizing `Platform.select()` to deliver a consistent look on Android, iOS, and Web.

## Output
The app provides an interactive six-row grid of cards for profiles. The application displays a round thumbnail for every card in the collapsed state. When expanded, it displays the user name, title, and bio. The UI is interactive and allows platform-specific styling, such as drop shadows. A double tap on every card allows to switch between states and display more information dynamically.