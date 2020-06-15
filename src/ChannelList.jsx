import React from 'react';
import cn from 'classnames';

const ChannelList = (props) => {
  const { channels, currentChannelId } = props;

  const btnClass = (channel) => cn({
    'nav-link': true,
    btn: true,
    'btn-block': true,
    active: channel.id === currentChannelId,
  });

  return (
    <div className="col-3 border-right">
      <div className="d-flex mb-2">
        <span> Channels </span>
        <button type="button" className="btn btn-link p-0 ml-auto">+</button>
      </div>
      <ul className="nav flex-column nav-pills nav-fill">
        { channels.map((channel) => (
          <li className="nav-item" key={channel.id}>
            <button type="button" className={btnClass(channel)}>
              { channel.name }
            </button>
          </li>
        )) }
      </ul>
    </div>
  );
};

export default ChannelList;
