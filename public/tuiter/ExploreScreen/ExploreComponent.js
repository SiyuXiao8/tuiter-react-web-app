import postSummaryList from "../PostSummaryList/index.js";

const exploreComponent = () => {
    return(`
        <div class="position-relative">
                <input class="form-control ps-5 rounded-pill
                              wd-search-twitter"
                           placeholder="Search Twitter"/>
                <span class="position-absolute wd-cog text-primary fs-4">
                    <i class="fas fa-cog"></i>
                </span>
                <span class="position-absolute wd-glass fs-5">
                    <i class="fas fa-search"></i>
                </span>
            </div>
   
           <ul class="nav mb-2 nav-tabs mt-2">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           
           <div class="position-relative">
                <img class="wd-starship mt-2" src="../../images/starship.jpeg">
                <h3 class="position-absolute fw-bold text-light bottom-0 start-0">SpaceX's Starship</h3>
           </div>
           
            ${postSummaryList()}
    `)
}
export default exploreComponent;