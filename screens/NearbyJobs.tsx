import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { searchJob } from '../apis/api'
import NearbyJobsCard from '../components/NearbyJobsCard'

const NearbyJobs = (props: any) => {

    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)

    const fetchData = async () => {
        setLoading(true)
        searchJob({ query: "Laravel developer", num_pages: 2 }).then((resp) => {
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
        <View>
            <View style={[styles.row, { justifyContent: "space-between", alignItems: "center" }]}>
                <Text style={styles.font16}>Nearby Jobs</Text>
                {/* <Text style={[styles.font16, { color: "grey" }]}>Show all</Text> */}
            </View>

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
        </View>
    )
}

export default NearbyJobs

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    },
    font16: {
        fontSize: 16,
        color: "white",
        fontWeight: "600"
    },
})