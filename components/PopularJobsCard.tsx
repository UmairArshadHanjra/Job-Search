import React from 'react'
import { colors } from '../assets/colors'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const PopularJobsCard = ({singleItem, navigation}) => {

    let genericImage = "https://w1.pngwing.com/pngs/942/582/png-transparent-engineering-computer-programming-software-developer-computer-software-programming-language-custom-software-software-engineering-web-application-thumbnail.png"

    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("JobDetails", { jobId: singleItem?.job_id })}>
            <View style={[styles.row, { justifyContent: "flex-start" }]}>
                <Image
                    source={{ uri: singleItem?.employer_logo ? singleItem?.employer_logo : genericImage }}
                    style={{ width: 60, height: 50, backgroundColor: colors["white"], borderRadius: 10 }}
                    resizeMode='contain'
                />
                <View>
                <Text style={[styles.font20, { marginLeft: 10 }]}>{singleItem?.employer_name}</Text>
                <Text style={[styles.font14, { marginLeft: 10 }]}>Publisher: {singleItem?.apply_options[0]?.publisher}</Text>
                </View>
            </View>
            <Text style={[styles.font20, { marginTop: 10 }]} numberOfLines={1}>{singleItem?.job_title}</Text>
            <Text style={styles.font14} numberOfLines={1}>{singleItem?.job_country} | {singleItem?.job_city ? singleItem?.job_city : "New York"}</Text>
        </TouchableOpacity>
    )
}

export default PopularJobsCard

const styles = StyleSheet.create({
    font16: {
        fontSize: 16,
        fontWeight: "600",
    },
    font14: {
        fontSize: 14,
        fontWeight: "600",
        color: colors["white"],
    },
    font20: {
        width: 250,
        fontSize: 20,
        fontWeight: "600",
        color: colors["white"],
    },
    card: {
        marginTop: 20,
        marginBottom: 5,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: colors["jungleGreen"],
    },
    row: {
        flexDirection: "row",
    },
});