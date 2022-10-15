const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-10">
                    <span class="text-muted">${post.topic}</span>
                    <div>
                        <span class="fw-bold">
                            ${post.userName} <i class="fas fa-check-circle"></i>
                        </span>
                        <span class="text-muted">- ${post.time}</span>
                        <p class="fw-bold">
                            ${post.title}
                        </p>
                    </div>
    
                </div>
                <div class="col-2">
                    <img class="wd-inner-pic-size float-end rounded" src="${post.image}">
                </div>
            </div>
        </li>
    `);
};

export default PostSummaryItem;