import React from "react";

import Widget from "components/Widget/index";

function UserCard(name, desc) {

  return (
    <Widget styleName="gx-card-full gx-dot-arrow-hover">
      <div className="gx-user-wid-row">
        <div className="gx-user-wid gx-mr-3">
          <img alt="..." src='https://via.placeholder.com/150x150' className="gx-object-cover"/>
        </div>
        <div className="gx-user-wid-body gx-py-3 gx-pr-3">
          <div className="ant-row-flex">
            <h2 className="h4 gx-mr-1 gx-mb-1">{name}</h2>
          </div>
          <p  style={{textAlign:"left"}} className="gx-mb-1 gx-text-grey gx-fs-sm">{desc}</p>
        </div>
      </div>
    </Widget>
  );
}

export default UserCard;
