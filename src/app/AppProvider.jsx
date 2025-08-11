"use client";

import AppLayout from "./AppLayout";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function NavbarLayout({ children }) {
  return (
    <Provider store={store}>
      <AppLayout>{children}</AppLayout>
    </Provider>
  );
}
