import { React, useState } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { SignIn } from '../services/authentication';
import { useDispatch } from 'react-redux';
import ThirdPartySignIns from './ThirdPartySignIns';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return <div style={{ width: '30rem', margin: 'auto', paddingTop: '8px' }}>
        <Form
            onSubmit={event => {
                event.preventDefault();
                SignIn(dispatch, { username, password });
                navigate('/', { replace: true });
            }}>
            <h4 style={{ textAlign: 'center' }}>Welcome back</h4>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Username'
                    onChange={event => setUsername(event.target.value)} />
            </InputGroup>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Password' type='password'
                    onChange={event => setPassword(event.target.value)} />
            </InputGroup>
            <Button type='submit' variant='primary' style={{ margin: 'auto', display: 'block', width: '10rem' }}>Sign In</Button>
        </Form>
    </div>
};

export default SignInPage;