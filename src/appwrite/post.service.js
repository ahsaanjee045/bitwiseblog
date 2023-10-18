import { Client, Storage, ID, Databases } from "appwrite";
import { config } from "../config/config";

class PostService {
  client = new Client();
  storage;
  db;
  constructor() {
    this.client = this.client
      .setEndpoint(config.apiEndpoint)
      .setProject(config.projectId);
    this.storage = new Storage(this.client);
    this.db = new Databases(this.client);
  }

  async createPost({ title, slug, thumbnail, content, userid }) {
    try {
      let post = await this.db.createDocument(
        config.databaseId,
        config.collectionId,
        ID.unique(),
        { title, slug, thumbnail, content, userid }
      );
      if (post) {
        return post;
      } else {
        return null;
      }
    } catch (error) {
      console.log("ERROR IN CREATING POST", error);
      return null;
    }
  }

  async uploadImage({ file, title, slug, content, userid }) {
    try {
      let fileId = await this.storage.createFile(
        config.bucketId,
        ID.unique(),
        file
      );
      if (fileId) {
        let post = await this.createPost({
          title,
          slug,
          thumbnail: fileId.$id,
          content,
          userid,
        });
        if (post) {
          return post;
        } else {
          return null;
        }
      } else {
        return null;
      }
    } catch (error) {
      console.log("ERROR IN UPLOADING FILE : ", error);
      return null;
    }
  }
}

const postService = new PostService();
export default postService;
