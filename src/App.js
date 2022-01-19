import AddPostIcon from "./components/AddPostBtn/AddPostIcon";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Posts from "./components/Posts/Posts";
import PostsProvider from "./Providers/PostsProvider";

function App() {
  return (
    <PostsProvider>
      <div className="bg-navy flex justify-center items-center flex-col">
        <main className=" bg-navy md:w-[768px]">
          <Header />
          <Posts></Posts>
          <AddPostIcon />
        </main>
        <Navigation />
      </div>
    </PostsProvider>
  );
}

export default App;
