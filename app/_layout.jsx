import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerTitle: 'Login' }} />
      <Stack.Screen name="signup" options={{ headerTitle: 'Sign Up' }} />
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerTitle: 'Profile' }} />
      <Stack.Screen name="gallery" options={{ headerTitle: 'Gallery' }} />
    </Stack>
  );
}
