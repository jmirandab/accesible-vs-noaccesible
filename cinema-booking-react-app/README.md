# Cinema Booking React App

This project is a React application for booking cinema tickets. It allows users to select a movie, choose a province, pick a date, and submit their booking information. The application features a tree view for movie genres, a custom select box for province selection, and a date picker for selecting the booking date.

## Project Structure

The project is organized into the following directories and files:

- **public/**: Contains the main HTML template and images used in the application.
  - **index.html**: The main HTML file where the React app is mounted.
  - **img/**: Directory containing movie poster images.

- **src/**: Contains all the source code for the React application.
  - **components/**: Contains reusable components for the application.
    - **TreeView/**: Component for displaying movies in a tree structure.
      - `TreeView.jsx`: Main tree view component.
      - `TreeGroup.jsx`: Represents a group of movies under a specific genre.
      - `TreeItem.jsx`: Represents an individual movie item.
      - `TreeView.css`: Styles for the tree view component.
    - **CustomSelect/**: Component for selecting provinces.
      - `CustomSelect.jsx`: Main custom select component.
      - `CustomSelect.css`: Styles for the custom select component.
    - **DatePicker/**: Component for selecting dates.
      - `DatePicker.jsx`: Main date picker component.
      - `DatePicker.css`: Styles for the date picker component.
    - **MovieDisplay/**: Component for displaying the selected movie.
      - `MovieDisplay.jsx`: Main movie display component.
      - `MovieDisplay.css`: Styles for the movie display component.
    - **Sidebar/**: Component for navigation and options.
      - `Sidebar.jsx`: Main sidebar component.
      - `Sidebar.css`: Styles for the sidebar component.
    - **Form/**: Component for handling booking form input.
      - `BookingForm.jsx`: Main booking form component.
      - `BookingForm.css`: Styles for the booking form component.
    - **Dialog/**: Component for displaying booking results.
      - `ResultDialog.jsx`: Main result dialog component.
      - `ResultDialog.css`: Styles for the result dialog component.
    - **Layout/**: Components for the overall layout of the application.
      - `Header.jsx`: Header component with the application title.
      - `MainContent.jsx`: Main content area component.
      - `Layout.css`: Styles for layout components.
  - **hooks/**: Custom hooks for managing state and validation.
    - `useAppState.js`: Hook for managing global application state.
    - `useFormValidation.js`: Hook for handling form validation.
  - **utils/**: Utility functions and constants.
    - `validation.js`: Functions for validating user input.
    - `constants.js`: Constant values used throughout the application.
  - **data/**: Contains data for the application.
    - `movies.js`: Array of movie objects with details.
  - **App.jsx**: Main application component that integrates all other components.
  - **App.css**: Global styles for the application.
  - **index.js**: Entry point of the React application.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd cinema-booking-react-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Features

- **Movie Selection**: Browse movies by genre using a tree view.
- **Province Selection**: Choose a province from a custom dropdown.
- **Date Selection**: Pick a date for the booking using a date picker.
- **Booking Form**: Fill out and submit the booking form.
- **Result Dialog**: View booking results in a dialog format.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please create a pull request or open an issue.

## License

This project is licensed under the MIT License. See the LICENSE file for details.