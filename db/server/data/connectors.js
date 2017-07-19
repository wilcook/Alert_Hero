import { _ } from 'lodash';
import Sequelize from 'sequelize';

const db = new Sequelize('alertHero', 'username', 'password' {
    dialect: 'mysql',
    host: // to be added
    port: // to be added
});

const groupModel = db.define('group', {
    name: { type: Sequelize.STRING },
});

const userModel = db.define('user', {
    phone: { type: Sequelize.STRING },
    firstname: { type: Sequelize.STRING },
    lastname: { type: Sequelize.STRING },
});

const messageModel = db.define('message', {
    text: { type: Sequelize.STRING },
});

const codeModel = db.define('code', {
    color: { type: Sequelize.STRING },
});

groupModel.belongsToMany(userModel, { through: groupUser });
userModel.belongsToMany(groupModel, { through: groupUser });
codeModel.belongsToMany(messageModel);
messageModel.belongsToMany(groupModel, { through: groupMessage });
messageModel.belongsTo(codeModel);
messageModel.belongsTo(userModel);

const Group = db.models.group;
const Message = db.models.message;
const User = db.models.user;
const Code = db.models.code;

export { Group, Message, User, Code };
