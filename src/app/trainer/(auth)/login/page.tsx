'use client'
import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Typography } from 'antd';
import { useStyles } from "../register/style";
import Image from "next/image";
import Link from "next/link";

const RegisterTrainer: React.FC = () => {

    const { styles } = useStyles()

    type FieldType = {
        email: string;
        password: string;
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
                <Typography className={styles.Text}>Trainer Login </Typography>
                <div className={styles.FormItems}>

                    <Form.Item<FieldType>
                        name="email"
                        rules={[{ required: true, message: 'Please input your email' }]}
                    >
                        <Input placeholder="Email" className={styles.Input} />
                    </Form.Item>
                   
                    <Form.Item<FieldType>
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" className={styles.Input} />
                    </Form.Item>
                    
                </div>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={styles.Submit}>
                        Sign Up
                    </Button>
                </Form.Item>
                <Link href={'register'}>
                    <Typography>Dont have an account? Register</Typography>
                </Link>
            </Form>
        </div>


    )
}

export default RegisterTrainer;