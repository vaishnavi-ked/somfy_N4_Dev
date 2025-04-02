# somfy_N4_Dev

# SomfyDashboard_N4_Development

# Sensor Status Dashboard

This project is a web-based dashboard for monitoring sensor data such as Lux Levels, Temperature, Occupancy, Light Levels, Wind, and Rain Status. It is built using HTML, CSS, and JavaScript with integration to Niagara Framework for real-time data fetching.

## Project Structure

```
.
├── alarm.html
├── bajastatus.html
├── index.html
├── NavFile.nav
├── test.html
├── .vscode/
│   └── settings.json
├── For testing/
│   ├── backup.html
│   ├── bar.html
│   ├── blackmotor.html
│   ├── ...
├── public/
│   ├── font.css
│   ├── log.html
│   ├── Images/
│   │   └── somfy1.jpeg
│   ├── css/
│   │   └── tailwind.css
│   ├── fontawesome-free/
│   │   └── css/
│   │       └── all.min.css
│   ├── js/
│   │   └── tailwind.js
│   └── ...
└── README.md
```

## Prerequisites

1. **Niagara Framework**: Ensure you have Niagara Framework installed and configured.
2. **Web Server**: Use a web server like Apache, Nginx, or a simple HTTP server to serve the files.
3. **Browser**: A modern browser like Chrome, Firefox, or Edge.

## How to Run the Project

1. **Clone the Repository**:
   Clone this repository to your local machine:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Access the Dashboard**:
   Open your browser and navigate to `http://localhost:8000/index.html`.

3. **Niagara Integration**:
   Ensure the Niagara station is running and accessible. The dashboard fetches real-time data from the Niagara station using Object Reference Descriptors (ORDs).

4. **Auto-Refresh**:
   The dashboard automatically refreshes sensor data every second. You can modify the refresh interval in the `updateDashboard` function in `index.html`.

## Features

- **Responsive Design**: The dashboard is fully responsive and adapts to different screen sizes.
- **Real-Time Data**: Fetches and displays real-time sensor data from the Niagara Framework.
- **Interactive UI**: Includes hover effects, dropdown menus, and custom scrollbars.
- **Customizable**: Easily update styles and functionality as needed.

## Troubleshooting

- **Data Not Displaying**: Ensure the Niagara station is running and the ORDs are correctly configured.
- **Dropdown Not Working**: Check the JavaScript console for errors and ensure all required scripts are loaded.
- **Styling Issues**: Verify that all CSS files are correctly linked and accessible.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Credits

Designed and developed by **Ked Technology**.
