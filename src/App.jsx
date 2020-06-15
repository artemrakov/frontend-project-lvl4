import React from 'react';
import ChannelList from './ChannelList';

const App = (props) => {
  const { channels, currentChannelId } = props;

  return (
    <div className="row h-100 pb-3">
      <ChannelList channels={channels} currentChannelId={currentChannelId} />
    </div>
  );
};

export default App;
