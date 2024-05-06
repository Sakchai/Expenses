import { React, useState } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { SignUp } from '../services/authentication';
import { useDispatch } from 'react-redux';
import ThirdPartySignIns from './ThirdPartySignIns';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return <div style={{ width: '30rem', margin: 'auto', paddingTop: '8px' }}>
        <Form
            onSubmit={event => {
                event.preventDefault();
                if (password === confirmPassword) {
                    SignUp(dispatch, { username, email, password });
                    navigate('/signin', { replace: true });
                }
            }}>
            <h4 style={{ textAlign: 'center' }}>Create an account</h4>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Username'
                    onChange={event => setUsername(event.target.value)} />
            </InputGroup>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Email'
                    onChange={event => setEmail(event.target.value)} />
            </InputGroup>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Password' type='password'
                    onChange={event => setPassword(event.target.value)} />
            </InputGroup>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Confirm Password' type='password'
                    onChange={event => setConfirmPassword(event.target.value)} />
            </InputGroup>
            <Button type='submit' variant='success'
                style={{ margin: 'auto', display: 'block', width: '10rem' }}
                disabled={password !== confirmPassword || password.length <= 0}>Sign Up</Button>
        </Form>
        <ThirdPartySignIns />
    </div>
};

export default SignUpPage;