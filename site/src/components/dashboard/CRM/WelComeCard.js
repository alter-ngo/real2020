import React from "react";
import {Icon} from "antd";

const WelComeCard = () => {

  return (
    <div className="gx-wel-ema gx-pt-xl-2">
      <h1 className="gx-mb-3">Welcome Ema!</h1>
      <p className="gx-fs-sm gx-text-uppercase">You Have</p>
      <ul className="gx-list-group">
        <li>
          <Icon type="message"/>
          <span>5 Unread messages</span>
        </li>
        <li>
          <Icon type="mail"/>
          <span>2 Pending invitations</span>
        </li>
        <li>
          <Icon type="profile"/>
          <span>7 Due tasks</span>
        </li>
        <li>
          <Icon type="bell"/>
          <span>3 Other notifications</span>
        </li>
      </ul>
    </div>

  );
};

export default WelComeCard;
