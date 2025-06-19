"use client"
import React, { useState } from 'react';
import { Row, Col, Card, Button, Typography, Modal, Form, Input, Select } from 'antd';
import { useRouter } from "next/navigation";
import { useStyles } from "./style";

const MealPlans: React.FC = () => {
    const router = useRouter();
    const { styles } = useStyles();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    type planType = {
        id: number;
        name: string;
        clientName: string;
        description: string;
    }

    const mealPlans: planType[] = [
        { id: 1, name: "Weight Loss", clientName: "Karabo", description: "Checking body's reaction to first diet" },
        { id: 2, name: "Muscle Gain", clientName: "Bonolo", description: "High protein plan for bulking phase" },
        { id: 3, name: "Maintenance", clientName: "Bokang", description: "Balanced macros to maintain current weight" },
        { id: 4, name: "Keto Kickstart", clientName: "Xolani", description: "Low-carb, high-fat ketogenic plan" },
        { id: 5, name: "Vegan Shred", clientName: "Tshepo", description: "Plant-based diet focused on fat loss" },
        { id: 6, name: "Gluten-Free Balance", clientName: "Willeam", description: "Balanced meals without gluten" },
        { id: 7, name: "Low Sugar Reset", clientName: "Anroux", description: "Reducing sugar intake to stabilize insulin" },
        { id: 8, name: "High Carb Load", clientName: "Polane", description: "Carbohydrate-heavy" },
        { id: 9, name: "Intermittent Fasting", clientName: "Nthabiseng", description: "Time-restricted eating window plan" },
        { id: 10, name: "Paleo Protocol", clientName: "Tebogo", description: "Natural, unprocessed food focus" },
        { id: 11, name: "Mediterranean Plan", clientName: "Lerato", description: "Healthy fats, lean proteins, and grains" },
        { id: 12, name: "DASH Diet", clientName: "Kagiso", description: "Heart-healthy plan to manage blood pressure" }
    ];

    const clients = [
        {
            id: 1,
            fullName: "Karabo",
            email: "test1@email.com",
        },
        {
            id: 2,
            fullName: "Modise",
            email: "Test2@email.com",
        },
    ];

    const foodItems = [
        { id: 1, name: "Oats" },
        { id: 2, name: "Chicken fillet - Skinless - Cooked" },
        { id: 3, name: "Potato - Cooked" },
    ];

    const handleClick = () => {
        router.push('/trainer/meal-plans/meal-plan')
    }

    const showModal = () => setIsModalVisible(true);

    const handleCancel = () => {
        form.resetFields();
        setIsModalVisible(false);
    };

    const handleCreate = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <div className={styles.Container}>
                <div>
                    <Typography className={styles.Typography}>Meal Plans</Typography>
                </div>
                <div>
                    <Button onClick={showModal} className={styles.NewClient}> Create meal plan</Button>
                </div>
                <Row gutter={[16, 16]}>
                    {mealPlans.map((plan) => (
                        <Col key={plan.id} xs={22} sm={12} md={8} lg={6}>
                            <Card
                                hoverable
                                onClick={handleClick}
                                className={styles.Card}
                            >
                                <h2>{plan.name}</h2>
                                <h2>{plan.clientName}</h2>
                                <p>{plan.description}</p>
                                <Button className={styles.Button}>View Plan</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <Modal
                title="Add New Food Item"
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
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="planName"
                        label="Meal Plan Name"
                        rules={[{ required: true, message: "Please enter a meal plan name" }]}
                    >
                        <Input placeholder="e.g. Weight Loss Plan" />
                    </Form.Item>

                    <Form.Item
                        name="client"
                        label="Client"
                        rules={[{ required: true, message: "Please select a client" }]}
                    >
                        <Select placeholder="Select a client">
                            {clients.map((client) => (
                                <Select.Option key={client.id} value={client.id}>
                                    {client.fullName}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.List name="meals">
                        {(fields, { add }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Card key={key} style={{ marginBottom: 16 }}>
                                        <Row gutter={16}>
                                            <Col span={10}>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'mealName']}
                                                    label="Meal Name"
                                                    rules={[{ required: true, message: 'Enter meal name' }]}
                                                >
                                                    <Input placeholder="e.g. Brunch" />
                                                </Form.Item>
                                            </Col>

                                            <Col span={12}>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'items']}
                                                    label="Select Items"
                                                    rules={[{ required: true, message: 'Select at least one item' }]}
                                                >
                                                    <Select mode="multiple" placeholder="Choose items">
                                                        {foodItems.map((item) => (
                                                            <Select.Option key={item.id} value={item.id}>
                                                                {item.name}
                                                            </Select.Option>
                                                        ))}
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Card>
                                ))}

                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block>
                                         Add Meal
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </Form>
            </Modal>
        </>
    );
};

export default MealPlans;