import { Client, Account, ID } from "appwrite";
import { config } from "../config/config";

class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client.setEndpoint(config.apiEndpoint).setProject(config.projectId);
    this.account = new Account(this.client);
  }

  async signup({ email, password }) {
    try {
      let user = await this.account.create(ID.unique(), email, password);
      //   return this.login(email, password)
      return user;
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      let user = await this.account.createEmailSession(email, password);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      console.log('in get current user')
      let user = await this.account.get();
      console.log(user);
      return user || null;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      return this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;

// authService.create

// authService.login(email, password)
