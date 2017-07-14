export const Schema = [`

    scalar Date

    type Group{
        id: Int!
        name: String
        users: [User]!
        messages: [Message]
    } 

    type User {
        id: Int!
        phone: Int!
        firstname: String!
        lastname: String!
        messages: [Message]
        groups: [Group]
    }

    type Code {
        id: Int!
        color: String!
        messages: [Message]
    }

    type Message {
        id: Int!
        to: Group!
        code: Code!
        text: String!
        sent: Date!
    }

    type Query {
        messages(groupId: Int, code: Int, sent: Date): [Message]

        group(id: Int!): Group

        code(id: Int): Code
    }

    schema {
        query: Query
    }
`];

export default Schema;
