const postListItem = (posts) => {
    // with the title, paragraph, and website
    if(posts.title && posts.paragraph && posts.website) {
        return (`
            <div class="row border-bottom border-secondary mt-3">
                <div class="col-1">
                    <img class="wd-img-thumbnail rounded-circle" src=${posts.imageThumb}>
                </div>
               
                <div class="col-11 ps-4 position-relative">
                    <span class="text-white">${posts.userName}</span>
                    <i class="fas fa-check-circle text-white"></i>
                    <span class="text-muted">${posts.handle} &middot; ${posts.time}</span>
                    <p>${posts.userComment}</p>
                    <span class="position-absolute wd-ellip fs-5 text-muted">&hellip;</span>
                    <div class="border border-secondary rounded">
                         <img class="wd-img border-bottom border-secondary" src=${posts.mainImage}>
                         
                         <div class="ms-3 mt-3">
                            <div>${posts.title}</div>
                            <div class="text-muted">${posts.paragraph}</div>
                            <p class="text-muted">${posts.website}</p>
                         </div>
                    </div>
                    
                    <div class="mt-2 mb-2">
                        <span class="">
                                <a href="#" class="text-muted text-decoration-none">
                                    <i class="far fa-comment"></i> <span class="ps-3">${posts.commentCount}</span>
                                </a>
                        </span>
                        
                        <span class="ps-5">
                            <a href="#" class="text-muted text-decoration-none">
                                <i class="fas fa-retweet"></i> <span class="ps-3">${posts.retweetCount}</span>
                            </a>
                        </span>
        
                        <span class="ps-5">
                        <a href="#" class="text-muted text-decoration-none">
                            <i class="far fa-heart"></i> <span class="ps-3">${posts.likeCount}</span>
                        </a>
                        </span>
        
                        <span class="ps-5">
                        <a href="#" class="text-muted text-decoration-none">
                            <i class="fas fa-share-square"></i>
                        </a>
                        </span>
                    </div>
                    
                </div>
            </div>
        `);
    } else { // without the title, paragraph, and website
        return (`
            <div class="row border-bottom border-secondary mt-3">
                <div class="col-1">
                    <img class="wd-img-thumbnail rounded-circle" src=${posts.imageThumb}>
                </div>
               
                <div class="col-11 ps-4 position-relative">
                    <span class="text-white">${posts.userName}</span>
                    <i class="fas fa-check-circle text-white"></i>
                    <span class="text-muted">${posts.handle} &middot; ${posts.time}</span>
                    <p>${posts.userComment}</p>
                    <span class="position-absolute wd-ellip fs-5 text-muted">&hellip;</span>
                    <div class="border border-secondary rounded">
                         <img class="wd-img border-bottom border-secondary" src=${posts.mainImage}>
                    </div>
                    
                    <div class="mt-2 mb-2">
                        <span class="">
                                <a href="#" class="text-muted text-decoration-none">
                                    <i class="far fa-comment"></i> <span class="ps-3">${posts.commentCount}</span>
                                </a>
                        </span>
                        
                        <span class="ps-5">
                            <a href="#" class="text-muted text-decoration-none">
                                <i class="fas fa-retweet"></i> <span class="ps-3">${posts.retweetCount}</span>
                            </a>
                        </span>
        
                        <span class="ps-5">
                        <a href="#" class="text-muted text-decoration-none">
                            <i class="far fa-heart"></i> <span class="ps-3">${posts.likeCount}</span>
                        </a>
                        </span>
        
                        <span class="ps-5">
                        <a href="#" class="text-muted text-decoration-none">
                            <i class="fas fa-share-square"></i>
                        </a>
                        </span>
                    </div>
                    
                </div>
            </div>
        `);
    }

};

export default postListItem;