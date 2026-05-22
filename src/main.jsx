import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "./styles/GlobalStyles";
import store from "./store/store";
import { checkAuthRequest } from "./store/slices/authSlice.js";

// Check if JWT is in cookie, before starting app
store.dispatch(checkAuthRequest());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
