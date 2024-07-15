import { Avatar, Flex, Skeleton, SkeletonCircle, Text, Box } from "@chakra-ui/react";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";


const Comment = ({ comment }) => {
  const { userProfile, isLoading } = useGetUserProfileById(comment.createdBy);

  if (isLoading) return <CommentSkeleton />;
  if (!userProfile) return null;

  return (
    <Flex gap={4} align="start">
      <Link to={`/${userProfile.username}`}>
        <Avatar src={userProfile.profilePicURL} size={"sm"} />
      </Link>
      <Box>
        <Flex direction="column">
          <Box>
            <Link to={`/${userProfile.username}`}>
              <Text fontWeight="bold" fontSize={12} display="inline">
                {userProfile.username}
              </Text>
              <Text fontSize={14} display="inline" ml={2}>
                {comment.comment}
              </Text>
            </Link>
          </Box>
          <Text fontSize={12} color="gray">
            {timeAgo(comment.createdAt)}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Comment;

const CommentSkeleton = () => {
  return (
    <Flex gap={4} w={"full"} alignItems={"center"}>
      <SkeletonCircle h={10} w="10" />
      <Flex gap={1} flexDir={"column"}>
        <Skeleton height={2} width={100} />
        <Skeleton height={2} width={50} />
      </Flex>
    </Flex>
  );
};
