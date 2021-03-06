import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      error {
        field
        message
      }

      user {
        id
        email
        token
        username
        createdAt
        displayname
        profile {
          avatar
          fullName
        }
        following {
          id
          username
        }
        follower {
          id
          username
        }
      }
    }
  }
`;

export const LIKEPOST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        id
        username
      }
      likeCount
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($postId: String!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      comments {
        createdAt
        username
        displayname
        body
        avatar
      }
    }
  }
`;

export const REGISTER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
    $displayname: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
        displayname: $displayname
      }
    ) {
      error {
        field
        message
      }
      user {
        id
        email
        token
        username
        createdAt
        displayname
        profile {
          avatar
          fullName
        }
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($body: String, $image: [String]) {
    createPost(body: $body, image: $image) {
      id
      body
    }
  }
`;

export const FIND_USERS = gql`
  mutation findUsers($displayname: String!) {
    findUsers(displayname: $displayname) {
      id
      email
      username
      createdAt
      displayname
      profile {
        avatar
      }
    }
  }
`;

export const CREATE_ROOM_CHAT = gql`
  mutation createRoomChat($userId: [String]!) {
    createRoomChat(userId: $userId)
  }
`;

export const CREATE_CONTENT_CHAT = gql`
  mutation createContentChat(
    $roomId: String!
    $content: String
    $image: String
  ) {
    createContentChat(roomId: $roomId, content: $content, image: $image) {
      content {
        displayname
        username
        id
        createdAt
        content
      }
    }
  }
`;

export const FOLLOWING = gql`
  mutation following($username: String!) {
    following(username: $username) {
      id
    }
  }
`;

export const EDIT_PROFILE = gql`
  mutation editProfile(
    $avatar: String
    $dateOfBirth: String
    $fullName: String!
    $story: String
    $coverImage: String
  ) {
    editProfile(
      avatar: $avatar
      dateOfBirth: $dateOfBirth
      fullName: $fullName
      story: $story
      coverImage: $coverImage
    ) {
      id
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $image: [String]!
    $price: String!
    $address: String!
    $body: String!
    $category: String!
    $describe: String
  ) {
    createProduct(
      image: $image
      price: $price
      address: $address
      body: $body
      category: $category
      describe: $describe
    ) {
      error {
        field
        message
      }
      product {
        id
      }
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID!) {
    deleteProduct(productId: $productId)
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

export const COMMENT_POST_IN_GROUP = gql`
  mutation CommentPostInGroup(
    $groupId: String!
    $postId: String!
    $body: String!
  ) {
    CommentPostInGroup(groupId: $groupId, postId: $postId, body: $body)
  }
`;

export const LIKE_POST_IN_GROUP = gql`
  mutation likePostInGroup($groupId: String!, $postId: String!) {
    likePostInGroup(groupId: $groupId, postId: $postId)
  }
`;

export const CREATE_POST_IN_GROUP = gql`
  mutation createPostInGroup(
    $groupId: String!
    $body: String
    $image: [String]
  ) {
    createPostInGroup(groupId: $groupId, body: $body, image: $image)
  }
`;

export const CREATE_INVITE = gql`
  mutation createInvite($groupId: String!, $userId: String!) {
    createInvite(groupId: $groupId, userId: $userId)
  }
`;

export const ACCEPT_INVITATION = gql`
  mutation acceptInvite(
    $groupId: String!
    $userId: String!
    $inviteId: String!
  ) {
    acceptInvite(groupId: $groupId, userId: $userId, inviteId: $inviteId)
  }
`;

export const CREATE_JOIN = gql`
  mutation createJoin($groupId: String!) {
    createJoin(groupId: $groupId)
  }
`;

export const CREATE_GROUP = gql`
  mutation createGroup(
    $name: String!
    $describe: String!
    $imageCover: String!
    $typeGroup: String!
    $public: Boolean!
  ) {
    createGroup(
      name: $name
      describe: $describe
      imageCover: $imageCover
      typeGroup: $typeGroup
      public: $public
    ) {
      error {
        field
        message
      }
      group {
        name
      }
    }
  }
`;

export const ACCEPT_JOIN = gql`
  mutation acceptJoin($groupId: String!, $userId: String!, $joinId: String!) {
    acceptJoin(groupId: $groupId, userId: $userId, joinId: $joinId)
  }
`;

export const DELETE_POST_IN_GROUP = gql`
  mutation deletePostInGroup($groupId: String!, $postId: String!) {
    deletePostInGroup(groupId: $groupId, postId: $postId)
  }
`;

export const LEAVE_THE_GROUP = gql`
  mutation leaveTheGroup($groupId: String!) {
    leaveTheGroup(groupId: $groupId)
  }
`;

export const JOIN_THE_ROOM = gql`
  mutation joinTheRoom($roomId: String!, $userIds: [String]!) {
    joinTheRoom(roomId: $roomId, userIds: $userIds)
  }
`;

export const LEAVE_THE_ROOM = gql`
  mutation leaveTheRoom($roomId: String!) {
    leaveTheRoom(roomId: $roomId)
  }
`;

export const EDIT_ROOM = gql`
  mutation editRoom($roomId: String!, $image: String!, $name: String!) {
    editRoom(roomId: $roomId, image: $image, name: $name)
  }
`;
