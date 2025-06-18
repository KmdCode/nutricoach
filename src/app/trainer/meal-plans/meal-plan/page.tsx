"use client"
import React from 'react';
import { Card, Typography, Divider } from 'antd';
import { useStyles } from './style';

const MealPlanPage: React.FC = () => {
    const { styles } = useStyles();
    const { Title, Text } = Typography;

    const mealPlanData = {
        name: "Weight loss",
        clientName: "WARREN VAN TONDER",
        mealTotals: {
            calories: 1119.6,
            carbs: "100.4",
            protein: "102.6",
            fat: "31.94",
        },
        meals: [
            {
                name: "Breakfast",
                itemTotals: {
                    calories: 221.4,
                    carbs: "38.4",
                    protein: "9.3",
                    fat: "3.66",
                },
                items: [
                    {
                        name: "Oats",
                        quantity: 60,
                        unit: "g",
                        calories: 221.4,
                        carbs: "38.4",
                        protein: "9.3",
                        fat: "3.66",
                    },
                ],
            },
            {
                name: "Lunch",
                itemTotals: {
                    calories: 430.2,
                    carbs: "31.74",
                    protein: "58.4",
                    fat: "6.62",
                },
                items: [
                    {
                        name: "Chicken fillet - Skinless - Cooked",
                        quantity: 180,
                        unit: "g",
                        calories: 297,
                        carbs: "0",
                        protein: "55.84",
                        fat: "6.43",
                    },
                    {
                        name: "Potato - Without skin - Cooked",
                        quantity: 120,
                        unit: "g",
                        calories: 104.4,
                        carbs: "24.16",
                        protein: "2.24",
                        fat: "0.12",
                    },
                    {
                        name: "Pineapple - Fresh",
                        quantity: 60,
                        unit: "g",
                        calories: 28.8,
                        carbs: "7.58",
                        protein: "0.32",
                        fat: "0.07",
                    },
                ],
            },
            {
                name: "Dinner",
                itemTotals: {
                    calories: 468,
                    carbs: "30.26",
                    protein: "34.9",
                    fat: "21.66",
                },
                items: [
                    {
                        name: "Beef - Minced - lean",
                        quantity: 120,
                        unit: "g",
                        calories: 322.8,
                        carbs: "0",
                        protein: "30.65",
                        fat: "21.2",
                    },
                    {
                        name: "Rice - Basmati - cooked",
                        quantity: 120,
                        unit: "g",
                        calories: 145.2,
                        carbs: "30.26",
                        protein: "4.25",
                        fat: "0.46",
                    },
                ],
            },
        ],
    };

    const { name, clientName, mealTotals, meals } = mealPlanData;

    return (
        <>
            <div className={styles.container}>
                <div className={styles.planHeader}>
                    <Title level={2}>{name}</Title>
                    <Text strong>Client: </Text>
                    <Text>{clientName}</Text>
                </div>

                <Card className={styles.totalsCard} title="Plan Totals">
                    <Text>Calories: {mealTotals.calories}</Text> |{' '}
                    <Text>Carbs: {mealTotals.carbs}g</Text> |{' '}
                    <Text>Protein: {mealTotals.protein}g</Text> |{' '}
                    <Text>Fat: {mealTotals.fat}g</Text>
                </Card>

                {meals.map((meal) => (
                    <Card key={meal.name} className={styles.mealCard} title={meal.name}>
                        <Text strong>Meal Totals:</Text> <br />
                        <Text>
                            Calories: {meal.itemTotals.calories} | Carbs: {meal.itemTotals.carbs}g | Protein: {meal.itemTotals.protein}g | Fat: {meal.itemTotals.fat}g
                        </Text>
                        <Divider />
                        <div className={styles.itemList}>
                            {meal.items.map((item) => (
                                <div key={item.name} className={styles.itemRow}>
                                    <Text>
                                        {item.name} ({item.quantity}{item.unit})
                                    </Text>
                                    <Text>
                                        {item.calories} cal | {item.carbs}g C | {item.protein}g P | {item.fat}g F
                                    </Text>
                                </div>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default MealPlanPage;