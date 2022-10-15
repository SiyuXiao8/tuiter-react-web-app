import NavigationSidebar from "../NavigationSidebar/index.js";
import whoToFollowList from "../WhoToFollowList/index.js";
import exploreComponent from "./ExploreComponent.js";


function exploreComponents() {
    $('#wd-explore').append(`
    <div class="row mt-2">
       <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar('explore')}
       </div>
       
       <div class="col-10 col-lg-7 col-xl-6">
            ${exploreComponent()}
       </div>
       
       <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4
       text-white">
            ${whoToFollowList()}
       </div>
    </div>
   `);
};

$(exploreComponents);