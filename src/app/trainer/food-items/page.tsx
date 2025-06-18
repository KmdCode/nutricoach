"use client"
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button, Typography, Modal, Form, Input, InputNumber } from 'antd';
import { useRouter } from "next/navigation";
import { useStyles } from "./style";
import SearchBar from '@/components/searchBar/SearchBar';
import TrainerNavbar from '@/components/TrainerNavbar/TrainerNavbar';
import { useFoodItemActions, useFoodItemState } from '@/providers/foodItemProvider';
import { IFoodItem } from '@/providers/foodItemProvider/context';

const FoodItems: React.FC = () => {
    const router = useRouter();
    const { styles } = useStyles();
    const {createFood, getFoods} = useFoodItemActions();
    const {foods} = useFoodItemState();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const handleClick = () => {
        router.push('/trainer/login')
    }

    useEffect(()=>{
        getFoods();
    },[''])

    const showModal = () => setIsModalVisible(true);

    const handleCancel = () => {
        form.resetFields();
        setIsModalVisible(false);
    };

    const handleCreate = async() => {
        try{
            const values:IFoodItem = await form.validateFields()
            const foodData:IFoodItem = values
            createFood(foodData)
            setIsModalVisible(false);
        }catch (error){
            console.log("Form validation failed:", error)
        }

    };

    return (
        <><TrainerNavbar />
            <div className={styles.Container}>

                <SearchBar />
                <div>
                    <Typography className={styles.Typography}>Food Items</Typography>
                </div>
                <div>
                    <Button onClick={showModal} className={styles.NewClient}> Add new Item</Button>
                </div>

                <Row gutter={[16, 16]}>
                    {foods?.map((item) => (
                        <Col key={item.id} xs={22} sm={12} md={8} lg={6}>
                            <Card
                                hoverable
                                onClick={handleClick}
                                className={styles.Card}
                            >
                                <h2>{item.name}</h2>
                                <p>{item.category}</p>
                                <p>{item.servingSize}</p>
                                <Button className={styles.Button}>View Item</Button>
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
                <Form layout="vertical" form={form}>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: "Please enter the name" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Protein (g)"
                        name="protein"
                        rules={[{ required: true, message: "Please enter protein value" }]}
                    >
                        <InputNumber className={styles.Input} />
                    </Form.Item>
                    <Form.Item
                        label="Carbs (g)"
                        name="carbs"
                        rules={[{ required: true, message: "Please enter carbs value" }]}
                    >
                        <InputNumber className={styles.Input} />
                    </Form.Item>
                    <Form.Item
                        label="Sugar (g)"
                        name="sugar"
                        rules={[{ required: true, message: "Please enter sugar value" }]}
                    >
                        <InputNumber className={styles.Input} />
                    </Form.Item>
                    <Form.Item
                        label="Fat (g)"
                        name="fat"
                        rules={[{ required: true, message: "Please enter fat value" }]}
                    >
                        <InputNumber className={styles.Input} />
                    </Form.Item>
                    <Form.Item
                        label="Sodium (mg)"
                        name="sodium"
                        rules={[{ required: true, message: "Please enter sodium value" }]}
                    >
                        <InputNumber className={styles.Input} />
                    </Form.Item>
                    <Form.Item
                        label="Fibre (mg)"
                        name="fiber"
                        rules={[{ required: true, message: "Please enter sodium value" }]}
                    >
                        <InputNumber className={styles.Input} />
                    </Form.Item>
                    <Form.Item
                        label="Potassium (mg)"
                        name="potassium"
                        rules={[{ required: true, message: "Please enter sodium value" }]}
                    >
                        <InputNumber className={styles.Input} />
                    </Form.Item>
                    <Form.Item
                        label="Category"
                        name="category"
                        rules={[{ required: true, message: "Please enter sodium value" }]}
                    >
                        <Input className={styles.Input} />
                    </Form.Item>
                    <Form.Item
                        label="Serving Size"
                        name="servingSize"
                        rules={[{ required: true, message: "Please enter sodium value" }]}
                    >
                        <InputNumber className={styles.Input} />
                    </Form.Item>
                    <Form.Item
                        label="Cholesterol"
                        name="cholesterol"
                        rules={[{ required: true, message: "Please enter sodium value" }]}
                    >
                        <InputNumber className={styles.Input} />
                    </Form.Item>
                    <Form.Item
                        label="Energy"
                        name="energy"
                        rules={[{ required: true, message: "Please enter sodium value" }]}
                    >
                        <InputNumber className={styles.Input} />
                    </Form.Item>
                    
                </Form>
            </Modal>
        </>
    );
}
export default FoodItems;