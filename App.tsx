import { StatusBar } from "expo-status-bar";
import React from "react";
import { ChatScreen } from "./src/screens";

export default function App() {
  return (
    <>
      <ChatScreen />
      <StatusBar style="auto" />
    </>
  );
}
