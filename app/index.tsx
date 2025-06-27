import { router } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    // Redirect to home screen when user is authenticated
    router.replace("./home");
  }, []);

  return null;
}
