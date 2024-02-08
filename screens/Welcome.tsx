import React, { useState } from 'react'
import { colors } from '../assets/colors'
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Welcome = (props: any) => {
    let { navigation } = props
    const [search, setSearch] = useState<any>(null)

    return (
        <View>
            <Text style={styles.mainHeading}>Find your perfect job here</Text>
            <View style={[styles.row, { alignItems: "center", marginVertical: 15 }]}>
                <TextInput
                    value={search}
                    style={styles.input}
                    placeholder="Search Job"
                    placeholderTextColor="grey"
                    onChangeText={(text) => setSearch(text)}
                />
                <TouchableOpacity
                    onPress={() => navigation?.navigate("JobSearch", { query: search })}
                    style={[styles.searchContainer, { backgroundColor: "orange" }]}
                >
                    <Text style={[styles.fontWeight600, { textAlign: "center", color: colors["lightWhite"] }]}>Search</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    mainHeading: {
        fontSize: 20,
        color: "white",
        fontWeight: "600",
    },
    input: {
        flex: 1,
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
    },
    row: {
        flexDirection: "row",
    },
    fontWeight600: {
        fontWeight: "600",
    },
    searchContainer: {
        height: 40,
        marginLeft: 6,
        borderRadius: 10,
        paddingHorizontal: 5,
        justifyContent: "center",
    },
    jobTypeContainer: {
        borderWidth: 1,
        borderRadius: 100,
        paddingVertical: 8,
        paddingHorizontal: 15
    },
})