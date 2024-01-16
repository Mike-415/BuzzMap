import React from "react";
import { AppRegistry } from "react-native";
import App from "./App"; // Import your main App component
import { name as appName } from "./app.json"; // Name of your app

const Root = () => {
    return (
        <App />
    );
};

AppRegistry.registerComponent(appName, () => Root);