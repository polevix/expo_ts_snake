import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native/types';
import { Colors } from '../styles/colors';

export default function Game(): JSX.Element {
    return (
        <SafeAreaView></SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
    }
})