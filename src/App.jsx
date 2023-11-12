import Home from './components/Home/Home';
import { Routes, Route } from "react-router-dom"
import Post from './components/writings/Post/Post';
import summaryData from "/public/summary.json"
import "./App.scss"
import PageNotFound from './components/PageNotFound/PageNotFound';
import PostList from './components/writings/PostList/PostList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/writings" element={<PostList summaryData={summaryData} />} />
      <Route path="/writings/:slug" element={<Post summaryData={summaryData} />} />
      <Route path="/notfound" element={<PageNotFound />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
