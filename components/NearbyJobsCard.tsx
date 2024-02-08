import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../assets/colors'

const NearbyJobsCard = (props: any) => {
    const { item } = props;
    const navigation = props?.navigation

    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation?.navigate("JobDetails", { jobId: item?.job_id })}>
            <View style={styles.row}>
                <Image
                    source={{ uri: item?.employer_logo ? item?.employer_logo : "https://w1.pngwing.com/pngs/942/582/png-transparent-engineering-computer-programming-software-developer-computer-software-programming-language-custom-software-software-engineering-web-application-thumbnail.png" }}
                    style={{ width: 60, height: 60, backgroundColor: colors["white"], borderRadius: 10 }}
                    resizeMode='contain'
                />
                <View style={{ marginLeft: 5, alignItems: "flex-start" }}>
                    <Text style={styles.font20} numberOfLines={1}>{item?.job_title}</Text>
                    <View style={[styles.row, { alignItems: "center", marginTop: 5 }]}>
                        <Text style={styles.font14}>{item?.job_country}</Text>
                        <View style={styles.verticalBar}></View>
                        <Text style={styles.font14}>{item?.job_employment_type}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default NearbyJobsCard

const styles = StyleSheet.create({
    font16: {
        fontSize: 16,
        fontWeight: "600",
    },
    font14: {
        fontSize: 14,
        fontWeight: "600",
        color: colors["info200"],
    },
    font20: {
        width: 300,
        fontSize: 20,
        fontWeight: "600",
        color: colors["white"],
    },
    card: {
        padding: 10,
        marginTop: 20,
        marginBottom: 5,
        borderRadius: 10,
        backgroundColor: colors["jungleGreen"],
    },
    row: {
        flexDirection: "row",
    },
    verticalBar: {
        height: "100%",
        borderLeftWidth: 2,
        marginHorizontal: 5,
        borderLeftColor: colors["info200"],
    },
})