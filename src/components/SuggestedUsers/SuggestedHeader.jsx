import { Avatar, Text, Flex, Button} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import useLogOut from '../../hooks/useLogOut';
import useAuthStore from '../../store/authStore';

function SuggestedHeader() {

  const {handleLogout, isLoggingOut} = useLogOut();
  const authUser = useAuthStore(state => state.user)

  if (!authUser) return null;

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Link to ={`${authUser.username}`}>
            <Avatar size={"md"} src={authUser.profilePicURL}/>
          </Link>
          <Flex flexDirection={"column"} w={"full"}>
            <Link to ={`${authUser.username}`}>
              <Text fontSize={12} fontWeight={"bold"}>
                  {authUser.username}
              </Text>
            </Link>
              <Text fontSize={12} color={"gray.500"} >{authUser.fullName}</Text>
          </Flex>
        </Flex>
        <Button size={"xs"} background={"transparent"} _hover={{ background: 'transparent', color: 'white'}}  fontSize={12} fontWeight={"medium"} color={"blue.400"} cursor={"pointer"} ml={"auto"} mr={-2} onClick={handleLogout} isLoading={isLoggingOut}>
            Log out
        </Button>
    </Flex>
  )
}

export default SuggestedHeader
