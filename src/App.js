
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Post from "./Components/Posts/Post";
import PageLayout from './Components/Ui/PageLayout'
import DataPosts from "./Components/Posts/DataPosts";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<DataPosts />} />
          <Route path="post" element={<Post />} />
        </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;