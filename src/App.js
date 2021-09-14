import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import Post from "./component/Post";
import PostGrid from "./component/PostGrid";
import "./App.css";
import { Link } from "react-router-dom";

const App = () => {
  const [postApiData, setPostApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPostApiData(postData.data);
    };
    fetchPost();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <PostGrid data={postApiData} />
        </Route>
        <Route exact path="/post/:id" component={Post} />
      </Switch>
    </div>
  );
};

export default App;
