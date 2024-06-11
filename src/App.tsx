import "@mantine/core/styles.css";

import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { CookiesProvider } from "react-cookie";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { theme } from "./theme";

export default function App() {
  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <MantineProvider theme={theme}>
        <Notifications />
        <RouterProvider router={router} />
      </MantineProvider>
    </CookiesProvider>
  );
}
