'use client'
import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Typography } from 'antd';
import { useStyles } from "./style";
import Image from "next/image";
import Link from "next/link";

const LoginTrainer: React.FC = () => {

    const { styles } = useStyles()

    type FieldType = {
        username: string;
        email: string;
        contactNumber: number;
        password: string;
        confirmPassword: string;
    }

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={styles.Container}>
            <Form
                name="basic"
                className={styles.Form}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Image
                    src="/logo.png"
                    alt="NutriCoach"
                    width={50}
                    height={50}
                    priority
                /> 
                <Typography className={styles.Typography}>NutriCoach</Typography>
                <Typography className={styles.Text}>Trainer Registration </Typography>
                <div className={styles.FormItems}>
                    <Form.Item<FieldType>
                        name="username"
                        rules={[{ required: true, message: 'Please input your username'}]}
                    >
                        <Input placeholder="Username" className={styles.Input} />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="email"
                        rules={[{ required: true, message: 'Please input your email' }]}
                    >
                        <Input placeholder="Email" className={styles.Input} />
                    </Form.Item>
                    <Form.Item<FieldType>
                        name="contactNumber"
                        rules={[{ required: true, message: 'Please input your phone number'}]}
                    >
                        <Input type="number" placeholder="phone Number" className={styles.Input} />
                    </Form.Item>
                    <Form.Item<FieldType>
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" className={styles.Input} />
                    </Form.Item>
                    <Form.Item<FieldType>
                        name="confirmPassword"
                        rules={[{ required: true, message: 'Please confirm password!' }]}
                    >
                        <Input.Password placeholder="Confirm Password" className={styles.Input} />
                    </Form.Item>
                </div>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={styles.Submit}>
                        Sign Up
                    </Button>
                </Form.Item>
                <Link href={'login'}>
                    <Typography>Already have an account? Login</Typography>
                </Link>
            </Form>
        </div>


    )
}

export default LoginTrainer;