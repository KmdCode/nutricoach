"use client"
import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Typography, Modal, Form, Input, DatePicker } from 'antd';
import { useStyles } from "./style";
import SearchBar from '@/components/searchBar/SearchBar';
import { useTrainerActions, useTrainerState } from '@/providers/trainerProvider';
import { IUser } from '@/providers/authProvider/context';
import Spinner from '@/components/spinner/Spinner';


const TrainerHomepage: React.FC = () => {

    const { styles } = useStyles();
    const { clients, isPending } = useTrainerState();
    const { createClient, getClients } = useTrainerActions();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [form] = Form.useForm();

    useEffect(() => {
        getClients();
    }, [])

    const filteredClients = clients?.filter(client =>
        client.fullName?.toLowerCase().includes(searchTerm) ||
        client.email?.toLowerCase().includes(searchTerm)
    );

    const showModal = () => setIsModalVisible(true);

    const handleCancel = () => {
        form.resetFields();
        setIsModalVisible(false);
    };

    const handleCreate = async () => {
        try {
            const values: IUser = await form.validateFields();
            const trainerId = sessionStorage.getItem("trainerId") || "";
            const clientData: IUser & { trainerId: string | null } = {
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

    const handleSearch = (value: string) => {
        setSearchTerm(value.toLowerCase());
    };
    const handleChange = (value: string) => {
    setSearchTerm(value.toLowerCase());
};

    if (isPending) {
        return (
            <>
                <Spinner />
            </>

        )
    }

    return (
        <>
            <div className={styles.Container}>
                <SearchBar onSearch={handleSearch} onChange={handleChange}/>
                <div>
                    <Typography className={styles.Typography}>Clients</Typography>
                </div>
                <div>
                    <Button onClick={showModal} className={styles.NewClient}> Add new client</Button>
                </div>

                <Row gutter={[16, 16]}>
                    {filteredClients?.map((user) => (
                        <Col key={user.id} xs={22} sm={12} md={8} lg={6}>
                            <Card hoverable className={styles.Card}>
                                <h2>Name: {user.fullName}</h2>
                                <p>Phone Number: {user.contactNumber}</p>
                                <p>Email: {user.email}</p>
                                <p>Gender: {user.sex}</p>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <Modal
                title="Add New Client"
                className={styles.CustomModal}
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