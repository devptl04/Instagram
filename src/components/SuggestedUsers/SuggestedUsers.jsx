import { VStack, Flex, Text, Box, Link } from '@chakra-ui/react'
import React from 'react'
import useGetSuggestedUsers from '../../hooks/useGetSuggestedUsers'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

function SuggestedUsers() {
    const {isLoading, suggestedUsers} = useGetSuggestedUsers();
    if (isLoading) return null; 

  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader/>
        {suggestedUsers.length !== 0 && (
            <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color: "gray.400"}} cursor={"pointer"}>
                See All
            </Text>
        </Flex>
        )}

        {suggestedUsers.map((user) => (
				<SuggestedUser user={user} key={user.id} />
			))}


        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
            © 2024 Built By 
            <Link href="https://github.com/devptl04" target='_blank' color="blue.500" fontSize={12} mx={1}>
                Dev Patel
            </Link>
        </Box>
    </VStack>
  )
}

export default SuggestedUsers
