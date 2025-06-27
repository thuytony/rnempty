import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { AuthGuard } from "../src/components/auth/AuthGuard";
import { Providers } from "../src/providers";
import LoginScreen from "./login";

export default function RootLayout() {
  return (
    <Providers>
      <StatusBar style="auto" />
      <AuthGuard fallback={<LoginScreen />}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </AuthGuard>
    </Providers>
  );
}
