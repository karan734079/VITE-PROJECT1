/* eslint-disable no-useless-catch */
import config from "../configure/config";

import { Client, Account, ID } from "appwrite";

export class Authservice {
  client = new Client();
  account;
  constructor() {
    this.client.setEndpoint(config.AppWriteUrl).setProject(config.ProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      if (session) {
        localStorage.setItem("authToken", session.$id);
        return session;
      }
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
  }

  async logOut() {
    try {
      await this.account.deleteSessions();
      localStorage.removeItem("authToken"); // Remove token from localStorage on logout
    } catch (error) {
      throw error;
    }
  }
}

const authservice = new Authservice();

export default authservice;
