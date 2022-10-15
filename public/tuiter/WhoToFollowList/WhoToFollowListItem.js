const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item position-relative">
            <div class="ms-5 wd-follow-btn-spacing">
                <div>
                    <span class="fw-bold">${who.userName} <i class="fas fa-check-circle"></i></span> <br/>
                    <span >@${who.handle} </span>
                </div>
                <div>
                    <button class="btn btn-primary rounded-pill" type="submit">Follow</button>
                </div>
            </div>
            <img class="wd-img-thumbnail position-absolute rounded-circle" src="../../images/${who.avatarIcon}">
        </li>
    `);
};

export default WhoToFollowListItem;