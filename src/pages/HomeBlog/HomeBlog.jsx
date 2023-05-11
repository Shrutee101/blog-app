import React, { useState } from 'react'
import Header from '../../components/HomeComp/Header/header'
import SearchBar from '../../components/HomeComp/SearchBar/searchbar'
import BlogList from '../../components/HomeComp/BlogList/BlogList'
import { blogList } from '../../config/data'
import EmptyList from '../../components/Common/EmptyList/EmptyList'

const HomeBlog = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');
  const [btnval, setBtnval]=useState('')


  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.domain.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };
  // Search submit
  const handleSearchDomain = (e) => {
    e.preventDefault();
    handleSearchDomainResults();
  };

  // Search for blog by category
  const handleSearchDomainResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.domain.toLowerCase().includes(btnval.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };
  return (
    <div>
        {/* page hearder */}
        
        <Header value={btnval}
        formSubmit={handleSearchDomain}
        handleSearchKey={(e) => setBtnval(e.target.innerHTML)}

        />
       
        {/* search bar */}
        <SearchBar  value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}/>
        {/* bloglist and empty list */}
          {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  )
}

export default HomeBlog