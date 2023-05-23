import React from 'react';
import { Link } from 'react-router-dom';
import Twemoji  from 'react-twemoji';

const Card: React.FC = () => {
  // 絵文字をランダムで生成する関数
  const randomEmoji = () => {
    const emojiList = [
      '🎉', '🎊', '🎈', '🎁', '🎂',
      '🎄', '🎃', '🎆', '🎇', '🧨',
      '🎎', '🎏', '🎐', '🎑', '🧧',
      '🎀', '🎁', '🎗', '🎟', '🎫',
      '🎖', '🏆', '🏅', '🥇', '🥈',
      '🥉', '⚽️', '🏀', '🏈', '⚾️',
      '🥎', '🎾', '🏐', '🏉', '🥏',
      '🎱', '🏓', '🏸', '🏒', '🏑',
      '🥍', '🏏', '🥅', '⛳️', '🏹',
      '🎣', '🤿', '🥊', '🥋', '🎽',
      '🛹', '🛷', '⛸', '🥌', '🎿',
      '⛷', '🏂', '🪂', '🏋️‍♀️', '🏋️‍♂️',
      '🤼‍♀️', '🤼‍♂️', '🤸‍♀️', '🤸‍♂️', '⛹️‍♀️',
      '⛹️‍♂️', '🤺', '🤾‍♀️', '🤾‍♂️', '🏌️‍♀️',
      '🏌️‍♂️', '🏇', '🧘‍♀️', '🧘‍♂️', '🏄‍♀️',
      '🏄‍♂️', '🏊‍♀️', '🏊‍♂️', '🤽‍♀️', '🤽',
      '🚣‍♀️', '🚣', '🧗‍♀️', '🧗‍♂️', '🚵‍♀️',
      '🚵‍♂️', '🚴‍♀️', '🚴‍♂️', '🏆', '🥇',
      '🥈', '🥉', '🏅', '🎖', '🏵',
      '🎗', '🎫', '🎟', '🎪', '🤹‍♀️',
      '🤹‍♂️', '🎭', '🩰', '🎨', '🎬',
      '🎤', '🎧', '🎼', '🎹', '🥁']
    const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
    return randomEmoji;
  }


  return (
    <div className="flex-shrink-0 w-64 bg-white rounded-lg">
      <Link to="/recreation">
        {/* <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" /> */}
        <div className='bg-gray-100 rounded-t-lg h-32 flex justify-center items-center'>
          {/* ランダムでTwemojiを表示したい */}
          <span className='text-6xl'>
            <Twemoji options={{ className: 'twemoji' }}>
              {randomEmoji()}
            </Twemoji>
          </span>
        </div>
      </Link>
      <div className="p-5">
        <Link to="/recreation">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy</h5>
        </Link>
        <p className="text-base text-gray-700">Here are the biggest enterprise technology acquisitions of 2021.</p>
      </div>
    </div>
  );
};

export default Card;
