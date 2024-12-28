import { AuthBindings } from "@refinedev/core";

import { API_URL, dataProvider } from "./data";

export const authCredentials = {
  email: "Pooya.payvar26@gmail.com",
  password: "demodemo",
};

export const authProvider: AuthBindings = {
  login: async ({email}) => {
    try{
      const {data} = await dataProvider.custom({
        url: API_URL,
        method:"post",
        headers: {},
        meta: {
          variables: {
        }
      })
    }
  }
}
