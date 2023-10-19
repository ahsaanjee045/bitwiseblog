import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import postService from "../appwrite/post.service";

const SingleArticle = () => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      postService
        .getPost(id)
        .then((post) => {
          console.log("IN SINGLE POST PAGE", post);
        })
        .catch(console.log);
    }
  }, [id]);

  return <div>SingleArticle</div>;
};

export default SingleArticle;
