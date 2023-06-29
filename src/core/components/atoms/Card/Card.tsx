import React from 'react';
import { Link } from 'react-router-dom';
import Twemoji from 'react-twemoji';
// import { MarkdownPreview } from '../Markdown';
import { RecreationData } from '../../../../api/api.topicpost.net/recreation';

type CardProps = {
  title: string;
  date: string;
  content: string;
  recreationId: string;
  data: RecreationData; // atomsのコンポートであるため、最終的には依存関係を取り除きたい
  // onClick?: () => void;
  // className?: string;
  // children: ReactNode;
};

const Card: React.FC<CardProps> = ({ title, date, content, recreationId, data }) => {
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
    const preview = content.slice(0, 40);
    return (preview + '...');
  };

  return (
    <div className="flex-shrink-0 w-64 bg-white rounded-lg">
      <Link to={`/recreation/` + data.recreation_id}>
        <div className='bg-gray-100 rounded-t-lg h-32 flex justify-center items-center'>
          {/* ランダムでTwemojiを表示したい */}
          <span className='text-6xl'>
            <Twemoji options={{ className: 'twemoji' }}>
              {randomEmoji()}
            </Twemoji>
          </span>
        </div>
        <div className="p-5">
          <div className="mb-2 text-base font-bold tracking-tight text-gray-900">{data.title}</div>
          <p className="text-gray-700 text-left text-sm mb-1">{formatDate(data.created_at)}</p>
          <div className='flex items-center justify-end'>
            <img
              src={data.edges.profile.icon_url}
              className='w-5 h-5 rounded inline'
              alt='ユーザーアイコン'
            />
            <span className='text-sm text-slate-800 pl-2'>{data.edges.profile.nickname}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
