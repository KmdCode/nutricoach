'use client'
import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Typography } from 'antd';
import { useStyles } from "../register/style";
import Image from "next/image";
import Link from "next/link";
import { useAuthActions, useAuthState } from "@/providers/authProvider";
import { IUser } from "@/providers/authProvider/context";

const LoginTrainer: React.FC = () => {

    const { styles } = useStyles();
    const {loginUser} = useAuthActions();
    const {isPending, isError} = useAuthState();

    if(isPending){
        return( <div>Loading...</div>)
    }
    if(isError){
        return( <div>Error registering user</div>)
    }
    

    const onFinish: FormProps<IUser>['onFinish'] = (values) => {
        console.log('Success:', values);
        const newUser: IUser = {
            email: values.email,
            password: values.password
        }
        loginUser(newUser)
        
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
                <Typography className={styles.Text}>Trainer Login </Typography>
                <div className={styles.FormItems}>

                    <Form.Item<IUser>
                        name="email"
                        rules={[{ required: true, message: 'Please input your email' }]}
                    >
                        <Input placeholder="Email" className={styles.Input} />
                    </Form.Item>
                   
                    <Form.Item<IUser>
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" className={styles.Input} />
                    </Form.Item>
                    
                </div>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={styles.Submit}>
                        Login
                    </Button>
                </Form.Item>
                <Link href={'register'}>
                    <Typography>Dont have an account? Register</Typography>
                </Link>
            </Form>
        </div>


    )
}

export default LoginTrainer;