import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';

export default function LoginScreen() {
  return (
    <View className="flex-1">
      <ImageBackground
        source={require('../assets/images/fond_ecran_login.png')}  // Chemin de ton image
        className="flex-1 justify-center items-center"
      >
        <View className="bg-white/80 p-5 rounded-2xl w-10/12 items-center">
          <Text className="text-4xl font-bold mb-4">Your way</Text>
          <TouchableOpacity className="bg-black rounded-full py-3 px-6 w-full items-center">
            <Text className="text-white text-lg">Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mt-4">
            <Text className="text-indigo-500 text-lg">S'inscrire</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
