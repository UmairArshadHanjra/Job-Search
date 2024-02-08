import { searchJob } from '../apis/api'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import NearbyJobsCard from '../components/NearbyJobsCard'
import { colors } from '../assets/colors'

const JobSearch = (props: any) => {
    const { query } = props?.route?.params || props
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)

    const fetchData = async () => {
        setLoading(true)
        searchJob({ query: query, num_pages: 2 }).then((resp) => {
            setData(resp.data)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <View style={styles.container}>
            <View style={[styles.row, { justifyContent: "center", marginTop: 15, marginBottom: 5, alignItems: "center" }]}>
                <Text style={styles.font16}>Your {query} Searched Jobs</Text>
            </View>

            <ScrollView>
                {loading ? <ActivityIndicator /> :
                    data?.length > 0 ?
                        data?.map((job: any, index: number) => {
                            return (
                                <NearbyJobsCard
                                    key={index}
                                    item={job}
                                    navigation={props?.navigation}
                                />
                            )
                        })
                        :
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.font16}>No Data Found...</Text>
                        </View>
                }
            </ScrollView>
        </View>
    )
}

export default JobSearch

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors["black"],
    },
    row: {
        flexDirection: "row",
    },
    font16: {
        fontSize: 20,
        fontWeight: "600",
        color: colors["white"],
    },
})