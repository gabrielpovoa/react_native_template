import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';

import '../styles/global.css';

export default function Home() {
  return (
    <SafeAreaView>
      <View className='bg-blue min-h-screen flex gap-2 items-center justify-center'>
        <Text className='text-lg text-white '>Expo App with tailwindcss and typescript</Text>
        <Text className='text-3xl border border-white p-2 rounded-md shadow-md' onPress={() => alert('Nice to have you here')}>⚛️</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
