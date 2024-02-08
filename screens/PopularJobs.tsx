import { searchJob } from "../apis/api"
import React, { useEffect, useState } from 'react'
import PopularJobsCard from '../components/PopularJobsCard'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'

const PopularJobs = (props: any) => {
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)

    const fetchData = async () => {
        setLoading(true)
        searchJob({ query: "React developer", num_pages: 2 }).then((resp) => {
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
                <Text style={styles.font16}>Popular Jobs</Text>
            </View>

            {loading ? <ActivityIndicator /> :
                data?.length > 0 ?
                    <FlatList
                        horizontal
                        data={data}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ columnGap: 15 }}
                        renderItem={({ item }) =>
                            <PopularJobsCard
                                singleItem={item}
                                navigation={props?.navigation}
                            />
                        }
                    />
                    :
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.font16}>No Data Found...</Text>
                    </View>
            }
        </View>
    )
}

export default PopularJobs

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

let data = [
    {
        "apply_options": [
            {
                "apply_link": "https://www.linkedin.com/jobs/view/full-stack-net-react-developer-at-apex-systems-3816130349",
                "is_direct": false,
                "publisher": "LinkedIn",
            },
        ],
        "employer_company_type": null,
        "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgsBfii5beTM3mpI6cj2jFr85o5B_1Odj3e6vp&s=0",
        "employer_name": "Apex Systems",
        "employer_reviews": [],
        "employer_website": null,
        "estimated_salaries": [
            {
                "job_title": "net full stack developer",
                "location": "United States",
                "max_salary": 150820,
                "median_salary": 116999.09575758,
                "min_salary": 87069.31292517,
                "publisher_link": "https://www.talent.com/salary?job=net+full+stack+developer",
                "publisher_name": "Talent.com",
                "salary_currency": "USD",
                "salary_period": "YEAR",
            },
            {
                "job_title": ".Net Full stack developer",
                "location": "United States",
                "max_salary": 115143,
                "median_salary": 93846,
                "min_salary": 75509,
                "publisher_link": "https://www.salary.com/research/salary/opening/net-full-stack-developer-salary",
                "publisher_name": "Salary.com",
                "salary_currency": "USD",
                "salary_period": "YEAR",
            },
        ],
        "job_apply_is_direct": false,
        "job_apply_link": "https://www.linkedin.com/jobs/view/full-stack-net-react-developer-at-apex-systems-3816130349",
        "job_apply_quality_score": 0.6685,
        "job_benefits": null,
        "job_city": null,
        "job_country": "US",
        "job_description": "Apex Systems is seeking a Full Stack Web Developer skilled in .NET and React technologies. This remote full time/direct hire position will work on development and implementation of data ingestion, activation, and workflow platform, which is pivotal in migration efforts from a MVC .NET framework to a REACT API Microservices approach.",
        "job_employment_type": "FULLTIME",
        "job_experience_in_place_of_education": false,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&q=Bp5O4ya1soIA4e2IAAAAAA%3D%3D&cs=1&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=Bp5O4ya1soIA4e2IAAAAAA%3D%3D&htidocid=Bp5O4ya1soIA4e2IAAAAAA%3D%3D",
        "job_highlights": {
            "Benefits": [
                "Compensation: $90-110k/year",
            ],
            "Qualifications": [
                "5+ years of Software Engineering experience",
                ".NET Core, .NET MVC, C#, and relevant frameworks",
                "SQL Server",
                "Bachelor’s or Master’s degree in Computer Science, Engineering, or a related field",
                "Proven experience in Full-Stack Development, with expertise in both .NET frameworks and REACT API Microservices",
                "Proficiency in front-end and back-end languages, frameworks, and databases",
                "Strong analytical and problem-solving skills, with a knack for tackling complex technical challenges",
                "An entrepreneurial spirit, capable of working independently in a dynamic, fast-paced environment",
                "Exceptional communication skills and experience in leading or collaborating with off-shore teams",
            ],
            "Responsibilities": [
                "This remote full time/direct hire position will work on development and implementation of data ingestion, activation, and workflow platform, which is pivotal in migration efforts from a MVC .NET framework to a REACT API Microservices approach",
                "Spearhead the design, development, and maintenance of our new REACT API Microservices architecture",
                "Ensure a smooth transition of existing functionalities and data from MVC .NET to the new framework",
                "Collaborate with our architectural team to maintain high development standards and processes",
                "Coordinate with our off-shore development team, ensuring timely and quality contributions",
                "Innovate and implement new features and functionalities, enhancing the scalability and efficiency of our platform",
                "Work in tandem with cross-functional teams to address key business challenges and integrate solutions into the platform",
                "Uphold data integrity and implement tools to optimize data collection and analysis processes",
                "Proactively navigate through technical challenges, demonstrating independence and initiative",
            ],
        },
        "job_id": "Bp5O4ya1soIA4e2IAAAAAA==",
        "job_is_remote": true,
        "job_job_title": null,
        "job_latitude": 37.09024,
        "job_longitude": -95.71289,
        "job_max_salary": null,
        "job_min_salary": null,
        "job_offer_expiration_datetime_utc": "2024-03-03T16:49:31.000Z",
        "job_offer_expiration_timestamp": 1709484571,
        "job_onet_job_zone": "4",
        "job_onet_soc": "15113300",
        "job_posted_at_datetime_utc": "2024-02-02T16:49:31.000Z",
        "job_posted_at_timestamp": 1706892571,
        "job_posting_language": "en",
        "job_publisher": "LinkedIn",
        "job_required_education": {
            "associates_degree": false,
            "bachelors_degree": true,
            "degree_mentioned": true,
            "degree_preferred": true,
            "high_school": false,
            "postgraduate_degree": false,
            "professional_certification": false,
            "professional_certification_mentioned": false,
        },
        "job_required_experience": {
            "experience_mentioned": true,
            "experience_preferred": true,
            "no_experience_required": false,
            "required_experience_in_months": 60,
        },
        "job_required_skills": null,
        "job_salary_currency": null,
        "job_salary_period": null,
        "job_state": null,
        "job_title": "Full Stack .NET/React Developer",
    }
]