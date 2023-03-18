import {
    Button,
    Flex,
    Heading,
    Hide,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const userid = localStorage.getItem("userid")

export default function Homepage() {

    const navigate = useNavigate();

    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'blue.400',
                                zIndex: -1,
                            }}>
                            Google Tasks
                        </Text>
                        <br />{' '}
                        <Text color={'blue.400'} as={'span'}>
                            Create your task
                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        Get Your Work Going with These Great Online Task Planner Tools.
                        To see and manage all your Google Tasks from one simple interface online
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Button
                            onClick={() => navigate("/login")}
                            rounded={'full'}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            {userid ? "Create Tasks" : "Login"}
                        </Button>
                        {!userid ? <Button
                            onClick={() => navigate("/signup")}
                            rounded={'full'}>Create your account</Button> : Hide}
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    }
                />
            </Flex>
        </Stack>
    );
}