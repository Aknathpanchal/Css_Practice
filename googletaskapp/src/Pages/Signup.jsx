import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Spinner,
    useToast,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { getSignupToken } from '../Redux/auth/signup/action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Progress } from '@chakra-ui/react'

export default function Signup() {
    const userid =localStorage.getItem("userid")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { token, loading } = useSelector((store) => store.signup)
    const [showPassword, setShowPassword] = useState(false);
    const [userData, setUserData] = useState({});

    const toast = useToast()



    useEffect(() => {
        if (token) {
            navigate("/login")
            toast({
                title: 'Thanks for signing up. Welcome to our community.',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: "top"

            })
        }
        if (userid) {
            navigate("/task");
        }
    }, [token, userid])



    const handleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = JSON.stringify(userData);
        dispatch(getSignupToken(payload, userid))
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <form onSubmit={handleSubmit}>
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isRequired>
                                        <FormLabel>Name</FormLabel>
                                        <Input onChange={handleChange} name="name" type="text" />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName" isRequired >
                                        <FormLabel>Username</FormLabel>
                                        <Input name='username' onChange={handleChange} type="text" />
                                    </FormControl>
                                </Box>
                            </HStack>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input name='email' onChange={handleChange} type="email" />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input name='password' onChange={handleChange} type={showPassword ? 'text' : 'password'} />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                                {loading ? <Progress size='xs' isIndeterminate /> : <Button
                                    type='submit'
                                    loadingText="Submitting"

                                    size="lg"
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign up
                                </Button>}
                            </Stack>
                        </form>
                        <Stack pt={6}>

                            <Text align={'center'}>
                                Already a user? <Link to='/login' color={'blue.400'}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack >
        </Flex >
    );
}