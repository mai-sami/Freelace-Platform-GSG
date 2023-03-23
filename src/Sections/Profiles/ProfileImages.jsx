import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CustomizedDialogs from '../../Components/molecules/Dialogs/Dialog'
import { AddProfileImages, GetProfileImages } from '../../Redux/Profile/profileActions';
 import { InputField, Span } from '../../Style/GlobalElements'
import { Flex } from '../../Style/Layout'

function ProfileImages({ images, setOpen, open }) {
    const [imageOne, setImageOwo] = useState('');
    const { Images } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        dispatch(GetProfileImages())
    }, [dispatch])
    const HandelEditImages = () => {
        dispatch(AddProfileImages({ imageOne }));
        setOpen(false);
    };
    return (
        <>
            <Flex overflow={"auto"} width={"100%"}>
                {Images?.map((item) => (
                    <Flex key={item} margin={"1rem"}>
                        <img width={"200px"} height={"200px"} src={item.imageOne} alt="item.imageOne" />
                    </Flex>
                ))}
            </Flex>
            <CustomizedDialogs
                title={"Edit your title"}
                open={open}
                handleClose={handleClose}
                onClick={HandelEditImages}
            >
                <Span fontWeight={"600"} fontSize={"18px"} lineHeight={"1"}>
                    Your Images
                </Span>
                 <InputField
                    margin={"1rem 0 0 0  "}
                    value={imageOne}
                    type={"url"}
                    placeholder={"please enter your url images"}
                    onChange={(e) => setImageOwo(e.target.value)}
                />

            </CustomizedDialogs>
        </>
    )
}

export default ProfileImages
