"use client"
import React from 'react';
import { Row, Col, Card, Button, Typography } from 'antd';
import { useRouter } from "next/navigation";
import { useStyles } from "./style";
import SearchBar from '@/components/searchBar/SearchBar';
import TrainerNavbar from '@/components/TrainerNavbar/TrainerNavbar';


const MealPlans: React.FC = () => {

    const { styles } = useStyles();

    const router = useRouter();

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

    const handleClick = () => {
        router.push('/trainer/meal-plans/meal-plan')
    }

    return (
        <><TrainerNavbar />
            <div className={styles.Container}>
                <SearchBar />
                <div>
                    <Typography className={styles.Typography}>Meal Plans</Typography>
                </div>
                <div>
                    <Button className={styles.NewClient}> Create meal plan</Button>
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
        </>
    );
};

export default MealPlans;