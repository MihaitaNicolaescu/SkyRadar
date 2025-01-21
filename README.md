# Weather App

This is a simple weather application that fetches and displays current weather data using the Visual Crossing Weather API. Users can search for a location to view weather temperature.

## Prerequisites

- A valid API key from [Visual Crossing Weather API](https://weather.visualcrossing.com/).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/SkyRadar.git
   ```

2. Navigate to the project directory:
   ```bash
   cd SkyRadar
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Add your API key:
   - Open the `App.jsx` file.
   - Locate the `API_KEY` variable and replace `YOUR_API_KEY_HERE` with your actual API key from Visual Crossing.

   Example:
   ```javascript
   const API_KEY = 'YOUR_API_KEY_HERE';
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

3. Enter a location in the search bar to view the weather data.

## Technologies Used

- React
- Visual Crossing Weather API
- Tailwind CSS

