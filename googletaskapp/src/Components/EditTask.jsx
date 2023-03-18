import { IconButton, Input, useToast } from "@chakra-ui/react"
import React, { useState } from "react"
import axios from "axios"

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Box,
    ButtonGroup
} from '@chakra-ui/react'
import { EditIcon } from "@chakra-ui/icons"
import { getTaskToken } from "../Redux/task/Get/action"
import { useDispatch } from "react-redux"
export default function EditTask({ _id }) {

    const [text, setText] = useState("")
    const initialFocusRef = React.useRef()
    const toast = useToast()
    const userid = localStorage.getItem("userid")
    const dispatch = useDispatch()

    const handleSave = (_id) => {
        let payload = { title: text }
        axios(`${process.env.REACT_APP_API_URL}/user/${userid}/task/${_id}`, {
            method: "PATCH",
            data: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => {
                dispatch(getTaskToken())
                toast({
                    title: 'Title upadated',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            })
            .catch((error) => console.log("Something went wrong"));

    }
    return (
        <Popover
            initialFocusRef={initialFocusRef}
            placement='bottom'
            closeOnBlur={false}
        >
            <PopoverTrigger>
                <IconButton size={'sm'} background='none' icon={<EditIcon />}></IconButton>
            </PopoverTrigger>
            <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
                <PopoverHeader pt={4} fontWeight='bold' border='0'>
                    Edit Your Task
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                    <Input value={text} onChange={(e) => setText(e.target.value)} />
                </PopoverBody>
                <PopoverFooter
                    border='0'
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    pb={4}
                >
                    <Box fontSize='sm'></Box>
                    <ButtonGroup size='sm'>
                        <Button colorScheme='green' onClick={() => handleSave(_id)}>Save</Button>
                    </ButtonGroup>
                </PopoverFooter>
            </PopoverContent>
        </Popover>
    )
}