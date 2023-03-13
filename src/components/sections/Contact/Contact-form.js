import React from 'react';
import {
    Form,
    Button
} from "react-bootstrap";
import {Controller} from "react-hook-form";

function ContactForm({control, formState, loading}) {
    return (
        <>
            <Controller
                name={'name'}
                control={control}
                render={({field, fieldState:{ error}})=>(
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            onChange={field.onChange}
                            value={field.value}
                            ref={field.ref}
                            placeholder="Ingresar nombre"
                        />
                        {!!error && (
                            <Form.Text className="text-danger">
                                {error.message}
                            </Form.Text>
                        )}
                    </Form.Group>
                )
                }
            />

            <Controller
                name={'email'}
                control={control}
                render={({field, fieldState:{ error}})=>(
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control
                            onChange={field.onChange}
                            value={field.value}
                            ref={field.ref}
                            type="email"
                            placeholder="Ingresar correo"
                        />
                        {!!error && (
                            <Form.Text className="text-danger">
                                {error.message}
                            </Form.Text>
                        )}
                    </Form.Group>
                )
                }
            />
            <Controller
                name={'phone'}
                control={control}
                render={({field, fieldState:{ error}})=>(
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>telefono</Form.Label>
                        <Form.Control
                            onChange={field.onChange}
                            value={field.value}
                            ref={field.ref}
                            placeholder="Ingresar telefono"
                        />
                        {!!error && (
                            <Form.Text className="text-danger">
                                {error.message}
                            </Form.Text>
                        )}
                    </Form.Group>
                )
                }
            />

            <Controller
                name={'message'}
                control={control}
                render={({field, fieldState:{ error}})=>(
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control
                            onChange={field.onChange}
                            value={field.value}
                            ref={field.ref}
                            as="textarea"
                            placeholder="Message"
                            rows={3}
                        />
                        {!!error && (
                            <Form.Text className="text-danger">
                                {error.message}
                            </Form.Text>
                        )}
                    </Form.Group>
                )
                }
            />
            <Button
                variant="primary"
                type="submit"
                disabled={!formState.isValid || loading}
            >
                Submit
            </Button>
        </>
    );
}

export default ContactForm;