'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.image.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name, email, image, password
        })

        if (data) {
            toast.success('Registration successfull')
            await authClient.signOut();
            redirect('/login')
        }
        if (error) {
            toast.error('Error: ' + error.message)
        }
    }
    return (
        <div className='animate__animated animate__bounceInUp'>
            <Card className="border border-gray-200 mx-auto md:w-125 py-10 mt-5">
                <h1 className="text-center text-2xl font-bold">Register</h1>

                <Form onSubmit={onSubmit} className="flex w-96 mx-auto flex-col gap-4">
                    <TextField isRequired name="name" type="text">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                        <FieldError />
                    </TextField>

                    <TextField isRequired name="image" type="text">
                        <Label>Image URL</Label>
                        <Input placeholder="Image URL" />
                        <FieldError />
                    </TextField>

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
                        <Button variant='primary' type="submit">
                            Register
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                    <p className='text-center'>Already have an account? <Link className='text-blue-700' href={'/login'}>Log In</Link></p>
                </Form>
            </Card>
        </div>
    );
};

export default RegisterPage;