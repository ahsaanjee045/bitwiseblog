export const config = {
  projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  apiEndpoint: String(import.meta.env.VITE_APPWRITE_API_ENDPOINT),
  databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  collectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};
