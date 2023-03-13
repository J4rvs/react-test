import React, { useState } from "react";
import { Container, Row, Col, Form} from 'react-bootstrap';
import './Contact.css';
import Image from './formulario.jpg';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import PhoneInput from 'react-phone-number-input';
import ContactForm from "./Contact-form";


const defaultContactValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
}
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup.object().shape({
    name:  yup.string()
        .max(255,'supera el maximo de caracteres')
        .required("Este campo es requerido"),
    email: yup.string()
        .max(255, 'supera el maximo de caracteres')
        .email("Esto no parece un email")
        .required("Este campo es requerido"),
    phone: yup.string().matches(phoneRegExp, 'Esto no parece un número'),
    message: yup.string()
        .min(4, 'Escriba un mensaje más largo')
        .required("Este campo es requerido"),
});

function Contact() {

    const [loading, setLoading] = useState(false);
    const methods = useForm({
        mode: "onChange",
        defaultValues: defaultContactValues,
        resolver: yupResolver(schema)
    });
    const { handleSubmit, control, formState } = methods;
    const onSubmit =  async (data) => {
        // este loading es por si lo quiers agregar dentro del submit, para que se desabilite y activar un loading
        setLoading(true)
        try{
            console.log(data)
            // agrega la petición acá
        }
        finally {
            // este loading es por si lo quiers agregar dentro del submit, para que se desabilite y activar un loading
            setLoading(false)
        }
    }


    return (
        <section id="contact">
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Get in touch</h2>
                        <h2 style={{color: '#DB7093'}}>We are hiring!</h2>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <ContactForm
                                control={control}
                                formState={formState}
                                loading={loading}
                            />
                        </Form>

                        {/*<Form onSubmit={handleSubmit(onSubmit, onError)}>*/}
                        {/*    <Form.Group className="mb-3" controlId="formBasicEmail">*/}
                        {/*    <Form.Control*/}
                        {/*        type="text"*/}
                        {/*        placeholder="Name"*/}
                        {/*        {...register("name", { required: "Name is required" })}*/}
                        {/*    />*/}
                        {/*    {errors.name && (*/}
                        {/*        <Form.Text className="text-danger">*/}
                        {/*        {errors.name.message}*/}
                        {/*        </Form.Text>*/}
                        {/*    )}*/}
                        {/*    </Form.Group>*/}

                        {/*    <Form.Group className="mb-3" controlId="formBasicEmail">*/}
                        {/*    <Form.Control*/}
                        {/*        type="email"*/}
                        {/*        placeholder="Email"*/}
                        {/*        {...register("email", { required: "Email is required" })}*/}
                        {/*    />*/}
                        {/*    {errors.email && (*/}
                        {/*        <Form.Text className="text-danger">*/}
                        {/*        {errors.email.message}*/}
                        {/*        </Form.Text>*/}
                        {/*    )}*/}
                        {/*    </Form.Group>*/}

                            {/*<Form.Group className="mb-3" controlId="formBasicEmail">*/}
                            {/*<PhoneInput*/}
                            {/*placeholder="Phone"*/}
                            {/*// value={value}*/}
                            {/*onChange=''*/}
                            {/*{...register("phone", { required: "Phone is required" })} />*/}
                            {/*{errors.phone && (*/}
                            {/*    <Form.Text className="text-danger">*/}
                            {/*        {errors.phone.message}*/}
                            {/*    </Form.Text>*/}
                            {/*)}*/}
                            {/*</Form.Group>*/}

                            {/*<Form.Group className="mb-3" controlId="formBasicEmail">*/}
                            {/*<Form.Control*/}
                            {/*    as="textarea"*/}
                            {/*    placeholder="Message"*/}
                            {/*    rows={3}*/}
                            {/*    {...register("message", { required: "Message is required" })}*/}
                            {/*/>*/}
                            {/*{errors.message && (*/}
                            {/*    <Form.Text className="text-danger">*/}
                            {/*    {errors.message.message}*/}
                            {/*    </Form.Text>*/}
                            {/*)}*/}
                            {/*</Form.Group>*/}

                        {/*    <Button variant="primary" type="submit"> Submit </Button>*/}
                        {/*</Form>*/}
                    </Col>
                    <Col md={6} className="contact-img">
                        <img src={Image}></img>
                    </Col>
                </Row>
            </Container>
            
        </section>
    );
}

export default Contact;