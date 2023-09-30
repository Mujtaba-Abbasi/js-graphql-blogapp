const typeDefs = `
    type User {
        name: String!,
        username: String!,
        email: String!,
        password: String!
    }


    type Post {
        title: String!,
        description: String!,
        tags: [String]!,
        userId: ID!
    }

    type AuthPayload {
        user: User!,
        token: String!
    }

    type Query {
        getPosts : [Post]
    }

    type Mutation {
        createUser(input: CreateUserInput): AuthPayload!,
        login(input: LoginInput): AuthPayload!
    }
    
    input CreateUserInput {
        name: String!,
        username: String!,
        email: String!,
        password: String!
    }

    input LoginInput {
        email: String!,
        password: String!
    }

`;
export default typeDefs;
