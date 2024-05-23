import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import Entities from "@/components/Entities/Entities.component";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <GestureHandlerRootView>
      <ThemeProvider value={DefaultTheme}>
        <Entities />
        {children}
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default Layout;
