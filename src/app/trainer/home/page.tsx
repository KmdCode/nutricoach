"use client"
import React from 'react';
import { Row, Col, Card, Button, Typography } from 'antd';
import { useRouter } from "next/navigation";
import { useStyles } from "./style";
import SearchBar from '@/components/searchBar/SearchBar';
import TrainerNavbar from '@/components/TrainerNavbar/TrainerNavbar';


const TrainerHomepage: React.FC = () => {

    const { styles } = useStyles();

    const router = useRouter();

    type userType = {
        id?: number;
        fullname: string;
        contactNumber: number;
        email: string;
        sex: string;
    }

    const clientDetails: userType[] = [
        { id: 1, fullname: "Karabo", contactNumber: 782227638, email: "email1@nutricoach.com", sex: "male" },
        { id: 2, fullname: "Smith", contactNumber: 785123456, email: "smith@nutricoach.com", sex: "female" },
        { id: 3, fullname: "Bokang", contactNumber: 786543210, email: "bokang@nutricoach.com", sex: "male" },
        { id: 4, fullname: "Xolani", contactNumber: 781112223, email: "xolani@nutricoach.com", sex: "male" },
        { id: 5, fullname: "Willeam", contactNumber: 789998877, email: "willeam@nutricoach.com", sex: "male" },
        { id: 6, fullname: "Tshepo", contactNumber: 787878787, email: "tshepo@nutricoach.com", sex: "male" },
        { id: 7, fullname: "Anroux", contactNumber: 784444555, email: "anroux@nutricoach.com", sex: "female" },
        { id: 8, fullname: "Polane", contactNumber: 783336666, email: "polane@nutricoach.com", sex: "male" },
        { id: 9, fullname: "Nthabiseng", contactNumber: 786666999, email: "nthabiseng@nutricoach.com", sex: "female" },
        { id: 10, fullname: "Tebogo", contactNumber: 782223344, email: "tebogo@nutricoach.com", sex: "male" },
        { id: 11, fullname: "Lerato", contactNumber: 785555333, email: "lerato@nutricoach.com", sex: "female" },
        { id: 12, fullname: "Kagiso", contactNumber: 780009999, email: "kagiso@nutricoach.com", sex: "male" }
    ];

    const handleClick = () => {
        router.push('/trainer/client-details')
    }

    return (
        <><TrainerNavbar/>
            <div className={styles.Container}>
                
                <SearchBar />
                <div>
                    <Typography className={styles.Typography}>Clients</Typography>
                </div>
                <div>
                    <Button className={styles.NewClient}> Add new client</Button>
                </div>

                <Row gutter={[16, 16]}>
                    {clientDetails.map((user) => (
                        <Col key={user.id} xs={22} sm={12} md={8} lg={6}>
                            <Card
                                hoverable
                                onClick={handleClick}
                                className={styles.Card}
                            >
                                <h2>{user.fullname}</h2>
                                <h2>0{user.contactNumber}</h2>
                                <p>{user.email}</p>
                                <p>{user.sex}</p>
                                <Button className={styles.Button}>View Client</Button>
                            </Card>

                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
};

export default TrainerHomepage;