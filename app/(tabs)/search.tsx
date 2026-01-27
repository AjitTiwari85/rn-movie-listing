import MovieCard from '@/components/MovieCard'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovies } from '@/services/api'
import useFetch from '@/services/usefetch'
import { useRouter } from 'expo-router'
import React from 'react'
import { FlatList, Image, View } from 'react-native'

const search = () => {

  const router = useRouter();
  const {data: movies,
     loading: moviesLoading,
      error: movieError} = useFetch(() => fetchMovies( {
    query: ''

  }))


  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className=" flex-1 absolute w-full z-0"
      resizeMode='cover'/>
      <FlatList data={movies}
          renderItem={({item}) => <MovieCard {... item}/>}
          keyExtractor={(item) => item.id.toString()}
          className='px-5'
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: 'center',
            gap: 16,
            marginVertical: 16
          }}

          contentContainerStyle={{
            paddingBottom: 100,
          }}

          ListHeaderComponent={
            <View className='w-full flex-row justify-center mt-20 items-center'>
              <Image source={icons.logo} className='w-12 h-10'/>

            </View>
          }
           />
    </View>
  )
}

export default search
