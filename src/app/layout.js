"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Provider } from "react-redux";
import { store } from "@/features/store/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
