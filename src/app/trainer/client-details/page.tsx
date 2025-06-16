"use client";
import React from "react";
import { Card, Typography, Divider } from "antd";
import { useStyles } from "./style";
import TrainerNavbar from "@/components/TrainerNavbar/TrainerNavbar";

const { Title, Text } = Typography;

const ViewClient: React.FC = () => {
    const { styles } = useStyles();

    const clientData = {
        fullName: "Test Client Name Surname",
        nickname: "test-client-name-surname",
        dateOfBirth: null,
        email: "client2@client2.com",
        contactNumber: "27711233221",
        sex: "male",
    };

    const mealPlanData = {
        name: "Weight loss",
        clientName: clientData.fullName,
        meals: [
            {
                name: "Breakfast",
                items: [{ name: "Oats" }],
            },
            {
                name: "Lunch",
                items: [
                    { name: "Chicken fillet - Skinless - Cooked" },
                    { name: "Potato - Without skin - Cooked" },
                    { name: "Pineapple - Fresh" },
                ],
            },
            {
                name: "Dinner",
                items: [
                    { name: "Beef - Minced - lean" },
                    { name: "Rice - Basmati - cooked" },
                ],
            },
        ],
    };

    return (
        <>
            <TrainerNavbar />
            <div className={styles.container}>
                <div className={styles.clientDetails}>
                    <Title level={2}>Client Details</Title>
                    <Divider />
                    <Text strong>Full Name: </Text> <Text>{clientData.fullName}</Text> <br />
                    <Text strong>Nickname: </Text> <Text>{clientData.nickname}</Text> <br />
                    <Text strong>Email: </Text> <Text>{clientData.email}</Text> <br />
                    <Text strong>Contact Number: </Text> <Text>{clientData.contactNumber}</Text> <br />
                    <Text strong>Sex: </Text> <Text>{clientData.sex}</Text> <br />
                    <Text strong>Date of Birth: </Text> <Text>{clientData.dateOfBirth || "N/A"}</Text>
                </div>

                <Divider />
                <Title level={2}>{mealPlanData.name}</Title>
                {mealPlanData.meals.map((meal) => (
                    <Card key={meal.name} title={meal.name} className={styles.fullWidthMealCard}>
                        <ul className={styles.itemList}>
                            {meal.items.map((item) => (
                                <li key={item.name}>{item.name}</li>
                            ))}
                        </ul>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default ViewClient;