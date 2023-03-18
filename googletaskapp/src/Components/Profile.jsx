import React from 'react'
import { Avatar, AvatarBadge, Button, Hide, Tag, TagLabel, VStack, WrapItem } from '@chakra-ui/react'
import { ArrowBackIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
const Profile = () => {
    const navigate = useNavigate()

    let userid = localStorage.getItem("userid");
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!userid) {
            setShow(false)
        }
        else {
            setShow(true)
        }
    }, [userid, show])


    if (!show) {
        return
    }
    return (
        <VStack direction={'row'} p='1%' spacing={4} position={[ 'relative','relative','absolute']}>
            <Button onClick={() => {
                localStorage.clear()
                navigate("/")
                window.location.reload()

            }}
                rightIcon={<ExternalLinkIcon />} colorScheme='teal' variant='solid'>
                Logout
            </Button>
            <Tag size='lg' colorScheme='red' borderRadius='full'>
                <Avatar
                    size='xs'
                    name={localStorage.getItem("username")}
                    ml={-1}
                    mr={2}
                >
                    <AvatarBadge boxSize='1.25em' bg='green.500' />
                </Avatar>
                <TagLabel>{localStorage.getItem("username")}</TagLabel>
            </Tag>

        </VStack >
    )
}

export default Profile