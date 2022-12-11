import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native-gesture-handler';
import { MyLocationIcon, SearchIcon } from '../../assets';
import { Container, HeaderArea, HeaderTitle, ListArea, LoadingIcon, LocationArea, LocationFinder, LocationInput, Scroller, SearchButton } from './styled';
import * as Location from 'expo-location';

export default function Home() {

  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false);
  const [coords, setCoords] = useState<object | null>({});
  const [locationText, setLocationText] = useState('');
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const onRefresh = () => {
    setRefreshing(false);
  }

  useEffect(() => {
    handleLocationFinder()
  }, [locationText])

  const handleLocationFinder = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    alert(location.coords.latitude);
  }

  const handleLocationSearch = () => {
    setCoords({});
    //getBarbers();
}
  return (
    <Container>
      <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>

                <HeaderArea>
                    <HeaderTitle numberOfLines={2}> Encontre o seu barbeiro favorito </HeaderTitle>
                    <SearchButton onPress={() => navigation.navigate()}>
                        <SearchIcon width="26" height="26" fill="#FFFFFF" />
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput
                        placeholder="Onde você está?"
                        placeholderTextColor="#FFFFFF"
                        value={locationText}
                        onChangeText={t=>setLocationText(t)}
                        onEndEditing={handleLocationSearch}
                    />
                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
                    </LocationFinder>
                </LocationArea>

                {loading &&
                    <LoadingIcon size="large" color="#FFFFFF" />
                }

                <ListArea>
                    {/* {list.map((item, k)=>(
                        <BarberItem key={k} data={item} />
                    ))} */}
                </ListArea>

            </Scroller>
    </Container>
  )
}