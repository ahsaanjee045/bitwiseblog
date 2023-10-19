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

  async createPost({
    title,
    slug,
    thumbnail,
    content,
    userid,
    username,
    summary,
  }) {
    try {
      let post = await this.db.createDocument(
        config.databaseId,
        config.collectionId,
        ID.unique(),
        { title, slug, thumbnail, content, userid, username, summary }
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

  async getPosts() {
    try {
      let posts = await this.db.listDocuments(
        config.databaseId,
        config.collectionId
      );
      if (posts) {
        return posts;
      } else {
        return null;
      }
    } catch (error) {
      console.log("ERROR WHILE GETTING POSTS", error);
      return null;
    }
  }
  async getPost(postid) {
    try {
      let post = await this.db.getDocument(
        config.databaseId,
        config.collectionId,
        postid
      );
      if (post) {
        return post;
      } else {
        return null;
      }
    } catch (error) {
      console.log("ERROR WHILE GETTING SINGLE POST", error);
      return null;
    }
  }

  async uploadImage({ file, title, slug, content, userid, username, summary }) {
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
          username,
          summary,
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

  getImage(imageId) {
    try {
      let image = this.storage.getFilePreview(config.bucketId, imageId);
      return image || null;
    } catch (error) {
      console.log("ERROR IN GETTING FILE : ", error);
      return null;
    }
  }
}

const postService = new PostService();
export default postService;
