import React from 'react';
import Conversation from './conversation';
import useConversation from '../../hooks/useConversation';
import { getRandomEmoji } from '../../../../backend/utils/emojis';

function Conversations() {
  const { loading, conversations } = useConversation();
  // console.log("Conversations are : ", conversations)

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()} // Call the function to get the emoji
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className='loading loading-spinner'></span> : null}
    </div>
  );
}

export default Conversations;
