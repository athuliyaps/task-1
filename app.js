const figmaDetails = async () => {
    try {
      const response = await fetch("https://nifty.spider.ws/public/api/blogs");
      console.log(response);
  
      if (response.status === 200) {
        const dataDetails = await response.json();
        console.log(dataDetails);
        displayBlogs(dataDetails);
      } else {
        alert("Failed to fetch");
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      alert("An error occurred");
    }
  };
  
  const displayBlogs = (blogs) => {
    const blogList = document.getElementById("blog-list");
  
    blogList.innerHTML = "";
  
    if (blogs.length > 0) {
      blogs.forEach((blog) => {

        const blogCard = document.createElement("div");
        blogCard.className = "col-lg-4 col-md-6 col-sm-12"; 
  
        blogCard.innerHTML = `
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title text-primary">${blog.title}</h5>
              <p class="card-text">${blog.excerpt}</p>
              <button class="btn btn-outline-primary" onclick="showBlogDetails('${blog.slug}')">Read More</button>
            </div>
          </div>
        `;

        blogList.appendChild(blogCard);
      });
    } else {
      blogList.innerHTML = '<p class="text-center">No blogs available.</p>';
    }
  };
  
  const showBlogDetails = (slug) => {
    alert(`Fetching details for blog: ${slug}`);
  };
  figmaDetails();
  