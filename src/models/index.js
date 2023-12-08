import { createContext, useContext } from 'react';
import { types } from 'mobx-state-tree';
import UserModel from './UserModel';

const RootModel = types.model({
  users: types.array(UserModel),
}).actions(self => ({
  addUsers(users) {
    self.users.replace(users);
  },
  removeUser(userId) {
    const userToRemove = self.users.find(user => user.id === userId);
    if (userToRemove) {
      const index = self.users.indexOf(userToRemove);
      if (index !== -1) {
        self.users.splice(index, 1);
      }
    }
  },
  addUser(user) {
    const newUser = UserModel.create(user);
    self.users.push(newUser);
  },
}));

const store = RootModel.create({
  users: [],
});

const MSTContext = createContext(null);

export const Provider = ({ children }) => (
  <MSTContext.Provider value={store}>{children}</MSTContext.Provider>
);

export const useMst = () => {
  const context = useContext(MSTContext);
  if (!context) {
    throw new Error('useMst must be used within a Provider');
  }
  return context;
};