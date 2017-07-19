import GraphQLDate from 'graphql-date';

import { Group, Message, User, Code, Sent } from './connectors';

export const Resolvers = {
    Date: GraphQLDate,
    Query: {
        group(_, args) {
            return Group.find({ where: args });
        },
        messages(_, args) {
            return Message.findAll({
                where: args,
                order: [['sent', 'DESC']],
            });
        },
        code(_, args) {
            return Code.find({ where: args });
        },
    },
    Message: {
        group(message) {
            return message.getGroup();
        },
        code(message) {
            return message.getCode();
        },
        sent(message) {
            return message.getSent();
        },
    },
    Group: {
        messages(group) {
            return Message.findAll({
                where: { groupId: group.id },
                order: [['sent', 'DESC']],
            });
        },
        users(group) {
            return group.getUsers();
        },
    },
    Code: {
        messages(code) {
            return Message.findAll({
                where: { codeId: code.id },
                order: [['sent', 'DESC']],
            });
        },
    },
    User: {
        groups(user) {
            return user.getGroups();
        },
    },
    Sent: {
        sent(message) {
            return message.getSent();
    },
    },
};

export default Resolvers;
