"use client";

import React, { useEffect, useState } from "react";
import { Card, Descriptions, Typography, Spin } from "antd";
import { useStyles } from "./style";
import ClientNavBar from "@/components/clientNavbar/ClientNavbar";
import { useAuthActions, useAuthState } from "@/providers/authProvider";


const ClientHomepage: React.FC = () => {
  const { Title } = Typography;
  const {styles} = useStyles();
  const { getCurrentUser } = useAuthActions();
  const { user, isPending} = useAuthState();

  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    const loadUser = async () => {
      await getCurrentUser();
      const storedUser = sessionStorage.getItem("currentUser");
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    };

    loadUser();
  }, []);

  if (isPending || !user) {
    return (
      <>
        <ClientNavBar />
        <div className={styles.Spin}>
          <Spin size="large" />
        </div>
      </>
    );
  }

  return (
    <>
      <ClientNavBar />
      <div className={styles.CardContainer}>
        <Card className={styles.Card}title={<Title level={4}>Profile Details</Title>}>
          <Descriptions column={1} className={styles.Descriptions}>
            <Descriptions.Item className={styles.DescriptionItem} label="Name">{currentUser?.name}</Descriptions.Item>
            <Descriptions.Item className={styles.DescriptionItem} label="Email">{currentUser?.email}</Descriptions.Item>
            <Descriptions.Item className={styles.DescriptionItem} label="Contact Number">{currentUser?.contactNumber}</Descriptions.Item>
          </Descriptions>
        </Card>
      </div>
    </>
  );
};

export default ClientHomepage;
