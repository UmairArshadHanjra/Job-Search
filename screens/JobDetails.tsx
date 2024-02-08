import { jobDetails } from '../apis/api'
import { colors } from '../assets/colors'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const JobDetails = (props: any) => {
    const { jobId } = props?.route?.params || props
    const [singleJob, setSingleJob] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [activeTab, setActiveTab] = useState<string>("About")

    const tabs = ["About", "Qualification", "Responsibilities"]

    useEffect(() => {
        let query = {
            job_id: jobId
        }

        setLoading(true)
        jobDetails(query).then((resp) => {
            setSingleJob(resp.data[0])
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
    }, [jobId])

    const renderTabContent = () => {
        const contentMap = {
            Qualification: {
                title: "Qualifications",
                content: singleJob?.job_highlights?.Qualifications ?? "N/A",
            },
            Responsibilities: {
                title: "Responsibilities",
                content: singleJob?.job_highlights?.Responsibilities ?? "N/A",
            },
            About: {
                title: "About",
                content: singleJob?.job_description ?? "N/A",
            },
        }

        const activeContent = contentMap[activeTab]

        return (
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: colors["white"] }}>{activeContent.title}</Text>
                <Text style={{ fontSize: 14, marginTop: 5, color: colors["white"] }}>{activeContent.content}</Text>
            </View>
        )
    }

    return (
        loading ? <ActivityIndicator size={"large"} /> :
            <View style={styles.container}>
                <Image
                    source={{ uri: singleJob?.employer_logo ? singleJob?.employer_logo : "https://w1.pngwing.com/pngs/942/582/png-transparent-engineering-computer-programming-software-developer-computer-software-programming-language-custom-software-software-engineering-web-application-thumbnail.png" }}
                    style={{ width: undefined, height: undefined, flex: 1 }}
                    resizeMode="contain"
                />
                <View style={{ alignItems: "center", marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: colors["white"] }}>{singleJob?.job_title}</Text>
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: colors["white"] }}>{singleJob?.job_state} | {singleJob?.job_country} | {singleJob?.employer_name}</Text>
                </View>

                <View style={{ alignItems: "center", marginTop: 10 }}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL(singleJob?.apply_options[0]?.apply_link)}
                        style={[styles.applyContainer, { backgroundColor: "orange" }]}
                    >
                        <Text>Apply for the job</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                    {tabs?.map((tab, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => setActiveTab(tab)}
                                style={[styles.tabContainer, { backgroundColor: activeTab == tab ? "orange" : colors["info200"] }]}
                            >
                                <Text>{tab}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>

                <View style={{ flex: 1 }}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}>
                        {renderTabContent()}
                    </ScrollView>
                </View>
            </View>
    )
}

export default JobDetails

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors["black"],
    },
    tabContainer: {
        padding: 8,
        borderRadius: 5,
        marginHorizontal: 20,
    },
    applyContainer: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
})