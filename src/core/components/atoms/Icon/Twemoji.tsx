import Twemoji from 'react-twemoji';

type TwemojiIconProps = {
  children: string;
};

const TwemojiIcon = ({ children }: TwemojiIconProps) => {
  return <Twemoji options={{ className: 'twemoji' }}>{children}</Twemoji>;
};

export default TwemojiIcon;
