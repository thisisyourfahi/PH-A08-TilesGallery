'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { redirect, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import { FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';

const LoginPage = () => {
    // showing alert if redirected
    const searchParams = useSearchParams();
    const wasRedirected = searchParams.get('redirected');
    const hasShown = useRef(false);

    useEffect(() => {
        if (wasRedirected && !hasShown.current) {
            toast.warning('You Need to log in to access that page');
            hasShown.current = true;
        }
    }, [wasRedirected])

    // login with email and pass
    const onSubmit = async (e) => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;

        const {data, error} = await authClient.signIn.email({
            email, password
        })

        if (data) {
            toast.success('Log In Successfull');
            redirect('/')
        }
        if (error) {
            toast.error('Error: ' + error.message)
        }
    }

    // login with google
    const handleGoogleSignIn = async () => {
        const {data, error} = await authClient.signIn.social({
            provider: 'google'
        })
    }
    return (
        <div className='animate__animated animate__bounceInUp'>
            <Card onSubmit={onSubmit} className="border border-gray-200 mx-auto md:w-126 py-10 mt-5">
                <h1 className="text-center text-2xl font-bold">Log In</h1>

                <Form className="flex w-86 md:w-96 mx-auto flex-col gap-4 pr-4">
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }

                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button type="submit">
                            Log In
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                    <div className="text-center space-y-4">
                        <p className="text-2xl font-bold">Or</p>
                        <Button onClick={handleGoogleSignIn} className="w-full" variant="tertiary">
                            <FaGoogle icon="devicon:google" />
                            Log In with Google
                        </Button>
                        <p className='text-center'>Don&apos;t have an account? <Link className='text-blue-700' href={'/register'}>Register</Link></p>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;