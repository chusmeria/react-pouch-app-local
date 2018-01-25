import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    Button,
    Input,
    InputGroup,
    InputGroupAddon
} from "reactstrap";

const UsernameField = props => {
    console.log(props);

    return (
        <div>
            <InputGroup className="mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="icon-user" />
                    </span>
                </div>
                <Input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={props.value}
                    onChange={event => props.onChangeValue(event)}
                />
            </InputGroup>
        </div>
    );
};

const FirstNameField = props => (
    <div>
        <InputGroup className="mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <i className="icon-user" />
                </span>
            </div>
            <Input type="text" placeholder="First Name" name="firstName"
                    value={props.value}
                    onChange={event => props.onChangeValue(event)} />
        </InputGroup>
    </div>
);

const LastNameField = props => (
    <div>
        <InputGroup className="mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <i className="icon-user" />
                </span>
            </div>
            <Input type="text" placeholder="Last Name" name="lastName"
                    value={props.value}
                    onChange={event => props.onChangeValue(event)} />
        </InputGroup>
    </div>
);

const CompanyField = props => (
    <div>
        <InputGroup className="mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <i className="icon-briefcase" />
                </span>
            </div>
            <Input type="text" placeholder="Company" name="company"
                    value={props.value}
                    onChange={event => props.onChangeValue(event)} />
        </InputGroup>
    </div>
);

const EmailField = props => (
    <div>
        <InputGroup className="mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">@</span>
            </div>
            <Input type="text" placeholder="Email" name="email"
                    value={props.value}
                    onChange={event => props.onChangeValue(event)} />
        </InputGroup>
    </div>
);

const PasswordField = props => (
    <div>
        <InputGroup className="mb-4">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <i className="icon-lock" />
                </span>
            </div>
            <Input type="password" placeholder="Type password" name="password"
                    value={props.value}
                    onChange={event => props.onChangeValue(event)} />
        </InputGroup>
    </div>
);

const VerifiedPasswordField = props => (
    <div>
        <InputGroup className="mb-4">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <i className="icon-lock" />
                </span>
            </div>
            <Input type="password" placeholder="Repeat password" name="verifiedPassword"
                    value={props.value}
                    onChange={event => props.onChangeValue(event)} />
        </InputGroup>
    </div>
);

// a stateless functional component (or presentational component) which simply iterates through all the form validation errors and displays them
const FormErrors = ({ formErrors }) => (
    <div className="formErrors">
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <p key={i}>
                        {fieldName} {formErrors[fieldName]}
                    </p>
                );
            } else {
                return "";
            }
        })}
    </div>
);

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            firstName: "",
            lastName: "",
            company: "",
            email: "",
            password: "",
            verifiedPassword: "",
            formErrors: { username: "", email: "", password: "" },
            usernameValid: false,
            emailValid: false,
            passwordValid: false,
            formValid: false
        };
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        console.log("hi");
        console.log(e.target.name, e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => {
            console.log(this.state);
            //this.validateField(name, value);
        });
    }

    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6">
                            <Card className="mx-4">
                                <CardBody className="p-4">
                                    <h1>Create your account</h1>
                                    <p className="text-muted">
                                        Fill out the following information
                                    </p>
                                    <UsernameField
                                        value={this.state.username}
                                        onChangeValue={this.handleUserInput}
                                    />
                                    <FirstNameField
                                        value={this.state.firstName}
                                        onChangeValue={this.handleUserInput}
                                    />
                                    <LastNameField
                                        value={this.state.lastName}
                                        onChangeValue={this.handleUserInput}
                                    />
                                    <CompanyField
                                        value={this.state.company}
                                        onChangeValue={this.handleUserInput}
                                    />
                                    <EmailField
                                        value={this.state.email}
                                        onChangeValue={this.handleUserInput}
                                    />
                                    <PasswordField
                                        value={this.state.password}
                                        onChangeValue={this.handleUserInput}
                                    />
                                    <VerifiedPasswordField
                                        value={this.state.verifiedPassword}
                                        onChangeValue={this.handleUserInput}
                                    />
                                    <Button
                                        color="success"
                                        block
                                        disabled={!this.state.formValid}
                                    >
                                        Create Account
                                    </Button>

                                    <Row>
                                        <Col xs="6">
                                            <Button color="link" />
                                        </Col>
                                        <Col xs="6">
                                            <Button color="link">
                                                <span>Forgot Password?</span>
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                                <CardFooter className="p-4">
                                    <Row>
                                        <Col xs="12">
                                            <Button color="info">
                                                <span>
                                                    Already Signed Up? Login!
                                                </span>
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <FormErrors formErrors={this.state.formErrors} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

// class Register extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: "",
//             firstName: "",
//             lastName: "",
//             company: "",
//             email: "",
//             password: "",
//             verifiedPassword: "",
//             formErrors: { username: "", email: "", password: "" },
//             usernameValid: false,
//             emailValid: false,
//             passwordValid: false,
//             formValid: false
//         };
//     }
//     handleUserInput(e) {
//         console.log("hi");
//         const name = e.target.name;
//         const value = e.target.value;
//         this.setState({ [name]: value }, () => {
//             console.log(state);
//             //this.validateField(name, value);
//         });
//     }
//     validateField(fieldName, value) {
//         let fieldValidationErrors = this.state.formErrors;
//         let usernameValid = this.state.emailValid;
//         let emailValid = this.state.emailValid;
//         let passwordValid = this.state.passwordValid;

//         switch (fieldName) {
//             case "username":
//                 break;
//             case "email":
//                 emailValid = value.match(
//                     /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
//                 );
//                 fieldValidationErrors.email = emailValid ? "" : " is invalid";
//                 break;
//             case "password":
//                 passwordValid = value.length >= 6;
//                 fieldValidationErrors.password = passwordValid
//                     ? ""
//                     : " is too short";
//                 break;
//             default:
//                 break;
//         }
//         this.setState(
//             {
//                 formErrors: fieldValidationErrors,
//                 emailValid: emailValid,
//                 passwordValid: passwordValid
//             },
//             this.validateForm
//         );
//     }

//     validateForm() {
//         this.setState({
//             formValid:
//                 this.state.emailValid &&
//                 this.state.passwordValid &&
//                 this.state.usernameValid
//         });
//     }

//     render() {
//         return (
//             <div className="app flex-row align-items-center">
//                 <Container>
//                     <Row className="justify-content-center">
//                         <Col md="6">
//                             <Card className="mx-4">
//                                 <CardBody className="p-4">
//                                     <h1>Create your account</h1>
//                                     <p className="text-muted">
//                                         Fill out the following information
//                                     </p>
//                                     <UsernameField
//                                         value={this.state.username}
//                                         onChange={event =>
//                                             this.handleUserInput(event)
//                                         }
//                                     />
//                                     <FirstNameField
//                                         value={this.state.firstName}
//                                         onChange={event =>
//                                             this.handleUserInput(event)
//                                         }
//                                     />
//                                     <LastNameField
//                                         value={this.state.lastName}
//                                         onChange={event =>
//                                             this.handleUserInput(event)
//                                         }
//                                     />
//                                     <CompanyField
//                                         value={this.state.company}
//                                         onChange={event =>
//                                             this.handleUserInput(event)
//                                         }
//                                     />
//                                     <EmailField
//                                         value={this.state.email}
//                                         onChange={event =>
//                                             this.handleUserInput(event)
//                                         }
//                                     />
//                                     <PasswordField
//                                         value={this.state.password}
//                                         onChange={event =>
//                                             this.handleUserInput(event)
//                                         }
//                                     />
//                                     <VerifiedPasswordField
//                                         value={this.state.verifiedPassword}
//                                         onChange={event =>
//                                             this.handleUserInput(event)
//                                         }
//                                     />
//                                     <Button
//                                         color="success"
//                                         block
//                                         disabled={!this.state.formValid}
//                                     >
//                                         Create Account
//                                     </Button>

//                                     <Row>
//                                         <Col xs="6">
//                                             <Button color="link" />
//                                         </Col>
//                                         <Col xs="6">
//                                             <Button color="link">
//                                                 <span>Forgot Password?</span>
//                                             </Button>
//                                         </Col>
//                                     </Row>
//                                 </CardBody>
//                                 <CardFooter className="p-4">
//                                     <Row>
//                                         <Col xs="12">
//                                             <Button color="info">
//                                                 <span>
//                                                     Already Signed Up? Login!
//                                                 </span>
//                                             </Button>
//                                         </Col>
//                                     </Row>
//                                 </CardFooter>
//                             </Card>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col md="6">
//                             <FormErrors formErrors={this.state.formErrors} />
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         );
//     }
// }

export default Register;
