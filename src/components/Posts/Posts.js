import React, { useContext } from "react";
import { PostsContext } from "../../Providers/PostsProvider";
import SinglePost from "../SinglePost/SinglePost";
import Page from "../../assets/images/MyPage.png";
import Memoji from "../../assets/images/Memoji1.png";

const Posts = () => {
  const { posts, handleDeletePost } = useContext(PostsContext);


  return (
    <article>
      {posts &&
        posts.map((post) => (
          <SinglePost
            userImage={`https://picsum.photos/50/50`}
            key={post.content}
            username={post.username}
            text={post.content}
            image={post.image}
            onClick={() => handleDeletePost(post.content)}
          />
        ))}

      <SinglePost
        username="karolgucwa"
        text={<a href="https://karolgucwa.pl/">https://karolgucwa.pl/</a>}
        image={Page}
        userImage={Memoji}
        time="10 min"
      />

      <SinglePost
        username="GitHub"
        text={<a href="https://github.com/KarolG99">https://github.com/KarolG99</a>}
        userImage={"https://picsum.photos/id/22/50/50"}
        time="13 min"
      />

      <SinglePost
        userImage={"https://picsum.photos/id/33/50/50"}
        username="my_name"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        image={"https://picsum.photos/id/120/480/350"}
        time="54 min"
      />
    </article>
  );
};

export default Posts;
