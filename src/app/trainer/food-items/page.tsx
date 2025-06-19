"use client";
import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Typography, Modal, Form, Input, InputNumber, Pagination } from "antd";
import { useStyles } from "./style";
import { useFoodItemActions, useFoodItemState } from "@/providers/foodItemProvider";
import { IFoodItem } from "@/providers/foodItemProvider/context";
import Spinner from "@/components/spinner/Spinner";

const FoodItems: React.FC = () => {
    const { styles } = useStyles();
    const { createFood, getFoods } = useFoodItemActions();
    const { foods, isPending } = useFoodItemState();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;

    useEffect(() => {
        getFoods();
    }, []);

    const showModal = () => setIsModalVisible(true);

    const handleCancel = () => {
        form.resetFields();
        setIsModalVisible(false);
    };

    const handleCreate = async () => {
        try {
            const values: IFoodItem = await form.validateFields();
            createFood(values);
            setIsModalVisible(false);
        } catch (error) {
            console.log("Form validation failed:", error);
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const paginatedFoods = foods?.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    if (isPending) {
        return <Spinner />;
    }

    return (
        <>
            <div className={styles.Container}>
                <div>
                    <Typography className={styles.Typography}>Food Items</Typography>
                </div>
                <div>
                    <Button onClick={showModal} className={styles.NewClient}>
                        Add new Item
                    </Button>
                </div>

                <Row gutter={[16, 16]}>
                    {paginatedFoods?.map((item) => (
                        <Col key={item.id} xs={22} sm={12} md={8} lg={6}>
                            <Card hoverable className={styles.Card}>
                                <h2 className={styles.heading}>{item.name}</h2>
                                <p>Category: {item.category}</p>
                                <p>Serving Size: {item.servingSize}</p>
                                <p>Protein: {item.protein}g</p>
                                <p>Carbs: {item.carbs}g</p>
                                <p>Sugar: {item.sugar}g</p>
                                <p>Fat: {item.fat}g</p>
                                <p>Fiber: {item.fiber}g</p>
                                <p>Sodium: {item.sodium}g</p>
                                <p>Potassium: {item.potassium}g</p>
                                <p>Cholesterol: {item.cholesterol}g</p>
                                <p>Energy: {item.energy}g</p>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className={styles.Pagination}>
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={foods?.length || 0}
                        onChange={handlePageChange}
                        showSizeChanger={false}
                        className={styles.PaginationButton}
                    />
                </div>
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
};

export default FoodItems;
