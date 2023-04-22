function getCategoryMap() {
    const categoriesMap = new Map();
    categoriesMap.set("No category", 0);
    categoriesMap.set("Film & Animation", 1);
    categoriesMap.set("Autos & Vehicles", 2);
    categoriesMap.set("Music", 10);
    categoriesMap.set("Pets & Animals", 15);
    categoriesMap.set("Sports", 17);
    categoriesMap.set("Travel & Events", 19);
    categoriesMap.set("Gaming", 20);   
    categoriesMap.set("People & Blogs", 22);
    categoriesMap.set("Comedy", 23);
    categoriesMap.set("Entertainment", 24);
    categoriesMap.set("News & Politics", 25);
    categoriesMap.set("Howto & Style", 26);
    categoriesMap.set("Education", 27);
    categoriesMap.set("Science & Technology", 28);
    categoriesMap.set("Nonprofits & Activism", 29);
    categoriesMap.set("Movies", 30);
    categoriesMap.set("Trailers", 44);
    return categoriesMap;
}

const categories = {
    getCategoryMap
  };
export default categories;