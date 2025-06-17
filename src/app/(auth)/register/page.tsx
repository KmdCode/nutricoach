'use client'
import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Typography } from 'antd';
import { useStyles } from "./style";
import Image from "next/image";
import Link from "next/link";
import { useAuthActions, useAuthState } from "@/providers/authProvider";
import { IUser } from "@/providers/authProvider/context";

const RegisterTrainer: React.FC = () => {

    const { styles } = useStyles();
    const {registerTrainer} = useAuthActions();
    const {isPending, isError} = useAuthState();

    if(isPending){
        return( <div>Loading...</div>)
    }
    if(isError){
        return( <div>Error registering user</div>)
    }


    const onFinish: FormProps<IUser>['onFinish'] = (values) => {
        // console.log('Success:', values);
        const newUser: IUser = {
            name: values.name,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
            role: "admin",
            contactNumber: "12345678",
            planType: "base",
            activeStatus: true,
            trial: false,
            policiesAccepted:true
        }
        console.log(newUser)
        registerTrainer(newUser)
    };

    const onFinishFailed: FormProps<IUser>['onFinishFailed'] = (errorInfo) => {
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
                    <Form.Item<IUser>
                        name="name"
                        rules={[{ required: true, message: 'Please input your username'}]}
                    >
                        <Input placeholder="Username" className={styles.Input} />
                    </Form.Item>

                    <Form.Item<IUser>
                        name="email"
                        rules={[{ required: true, message: 'Please input your email' }]}
                    >
                        <Input placeholder="Email" className={styles.Input} />
                    </Form.Item>
                    <Form.Item<IUser>
                        name="contactNumber"
                        rules={[{ required: true, message: 'Please input your phone number'}]}
                    >
                        <Input placeholder="phone Number" className={styles.Input} />
                    </Form.Item>
                    <Form.Item<IUser>
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" className={styles.Input} />
                    </Form.Item>
                    <Form.Item<IUser>
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

export default RegisterTrainer;