"use client"
import React from 'react';
import { Row, Col, Card, Button, Typography } from 'antd';
import { useRouter } from "next/navigation";
import { useStyles } from "./style";
import SearchBar from '@/components/searchBar/SearchBar';
import TrainerNavbar from '@/components/TrainerNavbar/TrainerNavbar';

const FoodItems: React.FC = () => {
    const router = useRouter();
    const { styles } = useStyles();

    type ItemType = {
        id: number;
        name: string;
        category: string;
        serving: number;
    }

    const foodItems: ItemType[] = [
        { id: 1, name: "Broccoli - Cooked", category: "veg", serving: 100 },
        { id: 2, name: "Raspberries - Fresh", category: "fruit", serving: 100 },
        { id: 3, name: "Sweet cinnamon bun", category: "grains", serving: 100 },
        { id: 4, name: "Cheese spread ", category: "dairy", serving: 1 },
        { id: 5, name: "Cod - Fried, breaded", category: "meat", serving: 100 },
        { id: 6, name: "Almond milk - Unsweetened", category: "dairy", serving: 240 },
        { id: 7, name: "Banana - Medium", category: "fruit", serving: 118 },
        { id: 8, name: "Brown rice - Cooked", category: "grains", serving: 100 },
        { id: 9, name: "Chicken breast - Grilled", category: "meat", serving: 100 },
        { id: 10, name: "Spinach - Raw", category: "veg", serving: 30 },
        { id: 11, name: "Greek yogurt - Plain", category: "dairy", serving: 150 },
        { id: 12, name: "Apple - Medium", category: "fruit", serving: 182 },
    ];


    const handleClick = () => {
        router.push('/trainer/login')
    }

    return (
        <><TrainerNavbar />
            <div className={styles.Container}>

                <SearchBar />
                <div>
                    <Typography className={styles.Typography}>Food Items</Typography>
                </div>
                <div>
                    <Button className={styles.NewClient}> Add new Item</Button>
                </div>

                <Row gutter={[16, 16]}>
                    {foodItems.map((item) => (
                        <Col key={item.id} xs={22} sm={12} md={8} lg={6}>
                            <Card
                                hoverable
                                onClick={handleClick}
                                className={styles.Card}
                            >
                                <h2>{item.name}</h2>
                                <p>{item.category}</p>
                                <p>{item.serving}</p>
                                <Button className={styles.Button}>View Item</Button>
                            </Card>

                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
}
export default FoodItems;