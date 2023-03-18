import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';
import { Progress } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLoginToken } from '../Redux/auth/Login/action';
export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const toast = useToast()


    const { res, loading, error } = useSelector((store) => store.login)

    let userid = localStorage.getItem("userid");

    useEffect(() => {
        if (res) {
            navigate("/task")
            toast({
                title: 'you have logged in successfully',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: "top"
            })
            window.location.reload()
        }
        else if (error) {
            toast({
                title: 'wrong credentials',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: "top"
            })
        }
        if (userid) {
            navigate("/task")
        }
    }, [res, error, userid])

    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = { username, password }
        payload = JSON.stringify(payload);
        dispatch(getLoginToken(payload))
    }


    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>

            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>

                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <form onSubmit={handleSubmit}>
                            <FormControl id="email" isRequired>
                                <FormLabel>Username</FormLabel>
                                <Input value={username} onChange={(e) => setUsername(e.target.value)} />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color={'blue.400'}>Forgot password?</Link>
                                </Stack>

                                {loading ? <Progress size='xs' isIndeterminate /> : <Button
                                    type='submit'
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign in
                                </Button>}
                            </Stack>
                        </form>
                    </Stack>
                </Box>
            </Stack>
        </Flex >
    );
}