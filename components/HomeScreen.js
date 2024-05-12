import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import JPEGImage from '../assets/JPEG.png';

const HomeScreen = () => {

 const newsData = [
    {
      id: 1,
      image: JPEGImage,
      title: 'Заголовок новини',
      date: 'Дата новини',
      shortText: 'Короткий текст новини'
    },
    {
      id: 2,
      image: JPEGImage,
      title: 'Заголовок новини',
      date: 'Дата новини',
      shortText: 'Короткий текст новини'
    },
    {
      id: 3,
      image: JPEGImage,
      title: 'Заголовок новини',
      date: 'Дата новини',
      shortText: 'Короткий текст новини'
    },
    {
      id: 4,
      image: JPEGImage,
      title: 'Заголовок новини',
      date: 'Дата новини',
      shortText: 'Короткий текст новини'
    },
    {
      id: 5,
      image: JPEGImage,
      title: 'Заголовок новини',
      date: 'Дата новини',
      shortText: 'Короткий текст новини'
    },
    {
      id: 6,
      image: JPEGImage,
      title: 'Заголовок новини',
      date: 'Дата новини',
      shortText: 'Короткий текст новини'
    },
    {
      id: 7,
      image: JPEGImage,
      title: 'Заголовок новини',
      date: 'Дата новини',
      shortText: 'Короткий текст новини'
    },
    {
      id: 8,
      image: JPEGImage,
      title: 'Заголовок новини',
      date: 'Дата новини',
      shortText: 'Короткий текст новини'
    },
    {
      id: 9,
      image: JPEGImage,
      title: 'Заголовок новини',
      date: 'Дата новини',
      shortText: 'Короткий текст новини'
    },
    {
      id: 10,
      image: JPEGImage,
      title: 'Заголовок новини',
      date: 'Дата новини',
      shortText: 'Короткий текст новини'
    },
    {
      id: 11,
      image: JPEGImage,
      title: 'Заголовок новини',
      date: 'Дата новини',
      shortText: 'Короткий текст новини'
    },
    {
      id: 12,
      image: JPEGImage,
      title: 'Заголовок новини',
      date: 'Дата новини',
      shortText: 'Короткий текст новини'
    }
  ];

  const renderNewsItem = ({ item }) => (
    <View style={styles.newsItemContainer}>
    
      <Image
        source={item.image}
        style={styles.newsImage}
      />
      <View style={styles.newsTextContainer}>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsDate}>{item.date}</Text>
        <Text style={styles.newsShortText}>{item.shortText}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
     <Text style={styles.title}>Новини</Text>
      <FlatList
        data={newsData}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#262525', 
  },
  newsItemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  newsImage: {
    width: 80, 
    height: 80, 
    marginRight: 10,
    borderRadius: 5,
  },
  newsTextContainer: {
    flex: 1
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  newsDate: {
    color: 'gray',
    marginBottom: 5,
  },
  newsShortText: {
    fontSize: 16,
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27,
    textAlign: 'center',
    marginBottom: 15,
    color: 'white',
  }
});

export default HomeScreen;
