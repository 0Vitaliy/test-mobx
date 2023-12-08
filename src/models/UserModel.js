import { types } from 'mobx-state-tree';

const GeoModel = types.model({
  lat: types.string,
  lng: types.string,
});

const AddressModel = types.model({
  street: types.string,
  suite: types.string,
  city: types.string,
  zipcode: types.string,
  geo: GeoModel,
});

const CompanyModel = types.model({
  name: types.string,
  catchPhrase: types.string,
  bs: types.string,
});

const UserModel = types.model({
  id: types.identifierNumber,
  name: types.string,
  username: types.string,
  email: types.string,
  address: AddressModel,
  phone: types.string,
  website: types.string,
  company: CompanyModel,
  blocked: types.optional(types.boolean, false),
}).views(self => ({
  getUserById(userId) {
    return self.users.find(user => user.id === userId);
  },
})).actions(self => ({
  editName(newName) {
    self.name = newName;
  },
  toggleBlock() {
    self.blocked = !self.blocked;
  },
}));

export default UserModel;