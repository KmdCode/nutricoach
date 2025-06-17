"use client"
import React, { useState } from 'react';
import { Row, Col, Card, Button, Typography, Modal, Form, Input, DatePicker } from 'antd';
// import { useRouter } from "next/navigation";
import { useStyles } from "./style";
import SearchBar from '@/components/searchBar/SearchBar';
import TrainerNavbar from '@/components/TrainerNavbar/TrainerNavbar';
import { useTrainerActions,  } from '@/providers/trainerProvider';
import { IUser } from '@/providers/authProvider/context';

const TrainerHomepage: React.FC = () => {

    const { styles } = useStyles();
    // const { isPending, isSuccess, isError } = useTrainerState();
    const { createClient } = useTrainerActions();

    // const router = useRouter();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

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

    // const handleClick = () => {
    //     router.push('/trainer/client-details')
    // }

    const showModal = () => setIsModalVisible(true);

    const handleCancel = () => {
        form.resetFields();
        setIsModalVisible(false);
    };

    const handleCreate = async () => {
        try {
            const values: IUser = await form.validateFields();
            const trainerId = sessionStorage.getItem("trainerId") || "";
            const clientData:IUser & { trainerId: string | null } = {
            ...values,
            trainerId,
        };
            createClient(clientData);
            form.resetFields();
            setIsModalVisible(false);
        } catch (error) {
            console.log("Form validation failed:", error);
        }
    };

    return (
        <><TrainerNavbar />
            <div className={styles.Container}>

                <SearchBar />
                <div>
                    <Typography className={styles.Typography}>Clients</Typography>
                </div>
                <div>
                    <Button onClick={showModal} className={styles.NewClient}> Add new client</Button>
                </div>

                <Row gutter={[16, 16]}>
                    {clientDetails.map((user) => (
                        <Col key={user.id} xs={22} sm={12} md={8} lg={6}>
                            <Card
                                hoverable
                                // onClick={handleClick}
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
            <Modal
                title="Add New New Client"
                open={isModalVisible}
                onOk={handleCreate}
                onCancel={handleCancel}
                footer={[
                    <Button key="cancel" onClick={handleCancel} className={styles.CancelButton}>
                        Cancel
                    </Button>,
                    <Button key="submit" onClick={handleCreate} className={styles.Button}>
                        Create
                    </Button>,
                ]}
            >
                <Form layout="vertical" form={form}>
                    <Form.Item
                        label="Name"
                        name="fullName"
                        rules={[{ required: true, message: "Please enter client name" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Client Email"
                        name="email"
                        rules={[{ required: true, message: "Please enter client email" }]}
                    >
                        <Input className={styles.Input} />
                    </Form.Item>
                    <Form.Item
                        label="Client Phone Number"
                        name="contactNumber"
                        rules={[{ required: true, message: "Please enter client phone number" }]}
                    >
                        <Input className={styles.Input} />
                    </Form.Item>
                    <Form.Item
                        label="Date of Birth"
                        name="dateOfBirth"
                        rules={[{ required: true, message: "Please select a date of birth" }]}
                    >
                        <DatePicker className={styles.Input} style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item
                        label="Gender"
                        name="sex"
                        rules={[{ required: true, message: "Please enter client gender" }]}
                    >
                        <Input className={styles.Input} />
                    </Form.Item>
                    
                </Form>
            </Modal>
        </>
    );
};

export default TrainerHomepage;