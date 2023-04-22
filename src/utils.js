function getCategoryMap() {
    const categoriesMap = new Map([
        ["No category", 0],
        ["Film & Animation", 1],
        ["Autos & Vehicles", 2],
        ["Music", 10],
        ["Pets & Animals", 15],
        ["Sports", 17],
        ["Travel & Events", 19],
        ["Gaming", 20],
        ["People & Blogs", 22],
        ["Comedy", 23],
        ["Entertainment", 24],
        ["News & Politics", 25],
        ["Howto & Style", 26],
        ["Education", 27],
        ["Science & Technology", 28],
        ["Nonprofits & Activism", 29],
        ["Movies", 30],
        ["Trailers", 44]
      ]);
    return categoriesMap;
}

const categories = {
    getCategoryMap
  };
export default categories;