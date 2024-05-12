import { useState } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const PhotoScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = () => {

  };

  const handleExitFullPhoto = () => {
    setSelectedImage(null);
  };

  const emptyPalettes = Array.from({ length: 16 }, (_, index) => index);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.imageGrid}>
        {emptyPalettes.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={handleImagePress}
            style={styles.imageContainer}
          >
            <View style={styles.emptyPalette} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      {selectedImage && (
        <TouchableOpacity
          onPress={handleExitFullPhoto}
          style={styles.selectedImageContainer}
        >
          {}
        </TouchableOpacity>
      )}
    </View>
  );
};

const { width } = Dimensions.get('window');
const paletteWidth = width / 2 - 15; 
const paletteHeight = 130;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262525', 
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    width: paletteWidth, 
    height: paletteHeight, 
    margin: 5, 
    borderRadius: 5, 
    overflow: 'hidden', 
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
  },
  emptyPalette: {
    flex: 1,
    backgroundColor: '#3d3d3d',
  },
  selectedImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedImage: {
    width: width,
    height: width,
    resizeMode: 'contain',
  },
});

export default PhotoScreen;
