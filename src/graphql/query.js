import gql from 'graphql-tag';

export const GET_POSTS = gql`
  query getPosts($limit: Int!) {
    getPosts(limit: $limit) {
      posts {
        id
        body
        createdAt
        displayname
        image
        avatar
        username
        comments {
          id
          createdAt
          username
          body
        }
        likes {
          id
          createdAt
          username
        }
        likeCount
        commentCount
      }
    }
  }
`;

export const GET_MY_POSTS = gql`
  query getMyPosts($username: String!, $limit: Int!) {
    getMyPosts(username: $username, limit: $limit) {
      posts {
        id
        body
        username
        createdAt
        displayname
        image
        avatar
        comments {
          id
          createdAt
          username
          body
        }
        likes {
          id
          createdAt
          username
        }
        likeCount
        commentCount
      }
    }
  }
`;

export const GET_COMMENT = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      createdAt
      displayname
      image
      avatar
      username
      comments {
        id
        createdAt
        username
        displayname
        body
        avatar
      }
      likes {
        id
        createdAt
        username
      }
      likeCount
      commentCount
    }
  }
`;

export const GET_USER = gql`
  query getUser {
    getUser {
      id
      email
      displayname
      createdAt
      profile {
        avatar
        dateOfBirth
        story
        follower
        following
        story
      }
    }
  }
`;

export const GET_USERS = gql`
  query getUsers {
    getUsers {
      id
      email
      username
      displayname
      profile {
        avatar
      }
      following {
        username
      }
    }
  }
`;
export const GET_USER_PROFILE = gql`
  query getUserProfile($username: String!) {
    getUser(username: $username) {
      username
      displayname
      profile {
        coverImage
        dateOfBirth
        story
        avatar
        fullName
      }
      following {
        id
      }
      follower {
        id
      }
    }
  }
`;

export const GET_USERS_FOLLOWING = gql`
  query getUserFollowing {
    getUserFollowing {
      id
      email
      username
      displayname
      profile {
        avatar
      }
      following {
        username
      }
    }
  }
`;

export const GET_USERS_FOLLOWER = gql`
  query getUserFollower($username: String!) {
    getUser(username: $username) {
      follower {
        avatar
      }
    }
  }
`;
export const GET_ROOM_CHAT = gql`
  query getRoomChat {
    getRoomChat {
      id
      name
      image
      members {
        id
        username
        displayname
        profile {
          avatar
        }
      }
      content {
        displayname
        username
        content
        createdAt
      }
    }
  }
`;

export const GET_CHAT = gql`
  query getChat($roomId: ID!) {
    getChat(roomId: $roomId) {
      id
      members {
        username
        displayname
        profile {
          avatar
        }
      }
      content {
        id
        displayname
        content
        createdAt
        username
        image
      }
    }
  }
`;

export const GET_MY_USER = gql`
  query getMyUser {
    getMyUser {
      username
      displayname
      profile {
        avatar
      }
      following {
        id
        displayname
        avatar
        username
      }
      profile {
        avatar
        coverImage
      }
    }
  }
`;

export const GET_NOTIFICATIONS = gql`
  query getNotification {
    getNotification {
      count
      notifications {
        type
        id
        displayname
        title
        avatar
        username
        createdAt
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query getProducts($category: String, $address: String, $sort: Int) {
    getProducts(category: $category, address: $address, sort: $sort) {
      id
      body
      price
      address {
        location
        zipcode
      }
      createdAt
      image
      category {
        name
        slug
      }
      seller {
        username
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query getProduct($productId: ID!) {
    getProduct(productId: $productId) {
      id
      price
      body
      address {
        location
        zipcode
      }
      createdAt
      image
      category {
        name
        slug
      }
      describe
      seller {
        username
        displayname
        profile {
          avatar
        }
      }
    }
  }
`;

export const GET_LOCATIONS = gql`
  query getLocations {
    getLocations {
      id
      location
      zipcode
    }
  }
`;

export const GET_CATAGORIES = gql`
  query getCategories {
    getCategories {
      id
      name
      slug
    }
  }
`;

export const GET_MY_PRODUCTS = gql`
  query getMyProducts {
    getMyProducts {
      image
      price
      id
      body
      describe
      address {
        location
      }
      category {
        name
      }
      seller {
        username
      }
    }
  }
`;

export const GET_FOLLOWER = gql`
  query getFollower {
    getMyUser {
      follower {
        id
        username
        displayname
        avatar
      }
    }
  }
`;

export const FIND_USERS = gql`
  query findUsers($displayname: String!) {
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

export const GET_MY_POST_IN_GROUP = gql`
  query getPostInMyGroup {
    getPostInMyGroup {
      groupId
      groupName
      post {
        id
        body
        createdAt
        displayname
        image
        avatar
        username
        comments {
          id
          createdAt
          username
          body
        }
        likes {
          id
          createdAt
          username
        }
        likeCount
        commentCount
      }
    }
  }
`;

export const GET_LIST_GROUPS = gql`
  query getMyGroups {
    getMyGroups {
      id
      name
      imageCover
      members {
        id
      }
    }
  }
`;

export const GET_Group = gql`
  query getGroup($groupId: String!) {
    getGroup(groupId: $groupId) {
      id
      name
      imageCover
      describe
      countMembers
      public
      createdAt
      posts {
        id
        body
        createdAt
        displayname
        image
        avatar
        username
        comments {
          id
          createdAt
          username
          body
        }
        likes {
          id
          createdAt
          username
        }
        likeCount
        commentCount
      }
      leader {
        displayname
        username
      }
      admins {
        id
      }
      members {
        id
        username
        displayname
        profile {
          avatar
        }
      }
    }
  }
`;

export const GET_COMMENT_POST_IN_GROUP = gql`
  query getCommentInGroup($groupId: String!, $postId: String!) {
    getCommentInGroup(groupId: $groupId, postId: $postId) {
      id
      createdAt
      username
      body
      displayname
      avatar
    }
  }
`;

export const GET_POST_IN_GROUP = gql`
  query getPostInGroup($groupId: String!, $postId: String!) {
    getPostInGroup(groupId: $groupId, postId: $postId) {
      id
      body
      createdAt
      username
      verified
      image
      displayname
      avatar
      likeCount
      commentCount
      likes {
        id
        createdAt
        username
        displayname
        avatar
      }
    }
  }
`;

export const GET_MY_INVITES = gql`
  query getMyInvites {
    getMyInvites {
      id
      groupId
      name
      imageCover
      from {
        id
        username
        displayname
      }
      to {
        id
      }
    }
  }
`;

export const FIND_GROUPS = gql`
  query findGroups($name: String!) {
    findGroups(name: $name) {
      id
      name
      imageCover
      members {
        id
        username
      }
    }
  }
`;

export const GET_TYPE_GROUP = gql`
  query getTypeGroup {
    getTypeGroup {
      name
    }
  }
`;

export const GET_JOIN = gql`
  query getJoinInGroup($groupId: String!) {
    getJoinInGroup(groupId: $groupId) {
      id
      groupId
      member {
        id
        displayname
        username
        profile {
          avatar
        }
      }
    }
  }
`;
