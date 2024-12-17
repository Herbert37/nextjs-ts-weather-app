import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface WeatherData {
  id: number;
  name: string;
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
  };
}

interface WeatherStore {
  favorites: WeatherData[];
  addFavorite: (city: WeatherData) => void;
  removeFavorite: (cityId: number) => void;
}

export const useWeatherStore = create(
  persist<WeatherStore>(
    (set) => ({
      favorites: [],
      addFavorite: (city) =>
        set((state) => ({
          favorites: [...state.favorites, city],
        })),
      removeFavorite: (cityId) =>
        set((state) => ({
          favorites: state.favorites.filter((city) => city.id !== cityId),
        })),
    }),
    {
      name: 'weather-storage',
    }
  )
)