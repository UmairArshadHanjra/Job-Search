import React from 'react'
import Welcome from './Welcome'
import PopularJobs from './PopularJobs'
import NearbyJobs from './NearbyJobs'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

const Home = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ padding: 20 }}>
                <Welcome navigation={navigation} />
                <View style={styles.verticalBar}></View>
                <PopularJobs navigation={navigation} />
                <View style={styles.verticalBar}></View>
                <NearbyJobs navigation={navigation} />
                <View style={styles.verticalBar}></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    verticalBar: {
        marginVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "grey",
    }
});