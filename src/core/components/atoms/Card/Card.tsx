import React from 'react';
import { Link } from 'react-router-dom';
import Twemoji from 'react-twemoji';

type CardProps = {
  title: string;
  date: string;
  content: string;
  // onClick?: () => void;
  // className?: string;
  // children: ReactNode;
};

const Card: React.FC<CardProps> = ({ title, date }) => {
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

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    return `${year}/${month}/${day}`;
  };

  const previewContent = (content: string) => {
    const preview = content.slice(0, 100);
    return preview;
  };

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
          {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy</h5> */}
          <div className="mb-2 text-base font-bold tracking-tight text-gray-900">{title}</div>
        </Link>
        <p className="text-gray-700 text-left text-sm mb-1">{formatDate(date)}</p>
        {/* <p className="text-base text-gray-700">Here are the biggest enterprise technology acquisitions of 2021.</p> */}
        <p className="text-base text-gray-700">
          {previewContent(content)}
        </p>
      </div>
    </div>
  );
};

export default Card;
