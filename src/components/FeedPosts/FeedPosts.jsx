import { Container, Skeleton, SkeletonCircle, VStack, Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'
import useGetFeedPosts from '../../hooks/useGetFeedPosts';
import FeedPost from './FeedPost'

function FeedPosts() {  
    const {isLoading, posts} = useGetFeedPosts(); 


  return (
    <Container maxW={"container.sm"} py={10} px={2}>
        {isLoading && [0, 1, 2].map((_, idx) =>(
            <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                <Flex gap={2}>
                    <SkeletonCircle size='10' />
                    <VStack gap={2} alignItems={"flex-start"}>
                        <Skeleton height='10px' w={'200px'}/>
                        <Skeleton height='10px' w={'200px'}/>
                    </VStack>
                </Flex>
                <Skeleton w={"full"}>
                    <Box h={"400px"}>contents wrapped</Box>
                </Skeleton>
            </VStack>
        ))}

        {!isLoading && posts.length > 0 && posts.map((post) => <FeedPost key={post.id} post={post} />)}
        {!isLoading && posts.length == 0 && (
            <>
                <Text fontSize={"md"} color={"blue.400"} textAlign={"center"}>
					Your lonely.
				</Text>
				<Text color={"white.500"} textAlign={"center"}>Stop coding and go make some friends!!</Text>
            </>
        )}
    </Container>
  )
}

export default FeedPosts
