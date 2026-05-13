"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiUser } from "react-icons/bi";
import { toast } from "react-toastify";

export function UpdateProfile() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        const {data, error} = await authClient.updateUser({
            image: photo,
            name: name
        })

        if (!error) {
            toast.success('Profile Updated')
        }
    }
    return (
        <Modal>
            <Button className={'mx-auto'} variant="secondary">Update Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiUser className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update Profile</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="New Profile Name" />
                                    </TextField>
                                    <TextField className="w-full" name="photo">
                                        <Label>Image URL</Label>
                                        <Input placeholder="New Image URL" />
                                    </TextField>
                                    <div className="space-x-4">
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">Update Profile</Button>
                                    </div>
                                </form>
                            </Surface>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}