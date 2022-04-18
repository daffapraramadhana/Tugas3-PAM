import React, { useState } from 'react';
import {
        StyleSheet,
        Platform,
        StatusBar,
        SafeAreaView,
        View,
        Text,
        TextInput,
        Button,
        Image
}from 'react-native';
import color from '../config/color';

function Hasil(props) {
    const [penerbangan, Cpenerbangan] = useState('CGK - PDG');

    return (
        <SafeAreaView style={styles.layar}>
            <View style={styles.bg} />
            <Text style={styles.title}>Hiling.id</Text>
            <Text style={styles.subtitle}>
                Hasil pencarian penerbangan {penerbangan} {'\n'}
                {'<Tanggal>'}
            </Text>
            <View style={styles.pencarian}>

            </View>
        </SafeAreaView>
    );
}

export default Hasil;

const styles = StyleSheet.create({
    layar:{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: color.background,

    },    
    bg:{
        height: '20%',
        width: '100%',
        backgroundColor: color.hijau,
        justifyContent: 'center',
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        color: color.item,
        position: 'absolute',
        alignSelf: 'center',
        textAlign: 'center',
        top: '5%',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'normal',
        color: color.item,
        position: 'absolute',
        alignSelf: 'center',
        top: '10%',
        textAlign: 'center',
    },
    pencarian: {
        height:'60%',
        width: '75%',
        backgroundColor: color.item,
        position: 'absolute',
        alignSelf: 'center',
        top: '20%',
        borderRadius: 15
    },
})