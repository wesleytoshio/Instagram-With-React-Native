import React from 'react'
import { 
    View, 
    Image ,
    StyleSheet,
    TouchableOpacity,
    Modal
} from 'react-native'

const ImageProfile = ({Size, Picture}) => {
    return(
        <TouchableOpacity style={styles.Button}>
            <View style={[styles.Container, {
                width: Size.width,
                height: Size.height
            }]}>
                <Image 
                    source={{uri: Picture}}
                    resizeMode="contain"
                    style={styles.Image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Container: {
        borderRadius: 50,
        overflow: 'hidden'
    },  
    Image: {
        width: '100%',
        height: '100%'
    },
    Button: {
        borderWidth: 2,
        borderColor: '#cd486b',
        borderRadius: 50,
        padding: 2
    }
})

export { ImageProfile }