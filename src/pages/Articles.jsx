import React, { useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import postService from "../appwrite/post.service";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../slices/postSlice";

const Articles = () => {
  const dispatch = useDispatch();

  const { posts, isLoading, error } = useSelector((state) => state.postState);

  useEffect(() => {
    postService
      .getPosts()
      .then((posts) => dispatch(getPosts(posts)))
      .catch(console.log);
  }, []);

  console.log(posts?.documents);

  return (
    <div className="min-h-screen">
      <div className="max-w-[1080px] mx-auto  py-[50px]">
        <h1 className="text-[46px] font-bold bg-gradient-to-br from-indigo-600 to-[#8057F5] bg-clip-text text-transparent">
          For you
        </h1>
        <div className="my-3">
          <div className="flex mt-3 rounded-full shadow-md   sm:max-w-md bg-[#e8e8e8]">
            <input
              type="text"
              name="title"
              id="title"
              autoComplete="title"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Post   Title...."
            />
          </div>
        </div>
        <div>
          {posts?.documents?.map((doc) => {
            return <ArticleCard key={doc.$id} post={doc} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
