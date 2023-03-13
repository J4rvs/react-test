import * as React from "react";
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import './Contact.css';
import Image from './formulario.jpg';
import { useForm } from "react-hook-form";
import PhoneInput from 'react-phone-number-input';

function Contact() {
    const initState = {
        email: "",
        name: "",
        phone: "",
        message: ""
      };
    
      // eslint-disable-next-line no-unused-vars
      const [initialValues, setInitialValues] = React.useState(initState);
    
      const onSubmit = (values) => {
        console.log("Values:::", values);
        console.log("Values:::", JSON.stringify(values));
      };
    
      const onError = (error) => {
        console.log("ERROR:::", error);
      };
    
      const {
        register,
        handleSubmit,
        getValues,
        watch,
        formState: { errors }
      } = useForm({
        mode: "onTouched",
        reValidateMode: "onSubmit",
        // reValidateMode: "onChange",
        defaultValues: initialValues
      });

      React.useEffect(() => {
        const subscription = watch((value, { name, type }) => {
          console.log(">>", value, name, type);
          // {1: '1', 2: '9'} '2' 'change'
        });
    
        return () => subscription.unsubscribe();
      }, [watch]);
    return (
        <section id="contact">
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Get in touch</h2>
                        <h2 style={{color: '#DB7093'}}>We are hiring!</h2>

                        <Form onSubmit={handleSubmit(onSubmit, onError)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && (
                                <Form.Text className="text-danger">
                                {errors.name.message}
                                </Form.Text>
                            )}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && (
                                <Form.Text className="text-danger">
                                {errors.email.message}
                                </Form.Text>
                            )}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <PhoneInput
                            placeholder="Phone"
                            // value={value}
                            onChange=''
                            {...register("phone", { required: "Phone is required" })} />
                            {errors.phone && (
                                <Form.Text className="text-danger">
                                    {errors.phone.message}
                                </Form.Text>
                            )}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                as="textarea"
                                placeholder="Message"
                                rows={3}
                                {...register("message", { required: "Message is required" })}
                            />
                            {errors.message && (
                                <Form.Text className="text-danger">
                                {errors.message.message}
                                </Form.Text>
                            )}
                            </Form.Group>

                            <Button variant="primary" type="submit"> Submit </Button>
                        </Form>
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