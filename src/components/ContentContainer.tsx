import TopNavigation from "./TopNavigation";
import { BsPlusCircleFill } from "react-icons/bs";
import Image from "next/image";

const ContentContainer = () => {
  return (
    <div className="content-container">
      <TopNavigation />
      <div className="content-list">
        <Post
          name="Ada"
          timestamp="1 hour ago"
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
        Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.`}
        />
        <Post
          name="Leon"
          timestamp="2 hours ago"
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
        />

        <Post
          name="Jill"
          timestamp="1 hour ago"
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
        />
        <Post
          name="Ellie"
          timestamp="4 hour ago"
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
        />
      </div>
      <BottomBar />
    </div>
  );
};

const BottomBar = () => (
  <div className="bottom-bar">
    <PlusIcon />
    <input
      type="text"
      placeholder="What's on your mind?"
      className="bottom-bar-input"
    />
  </div>
);

interface PostProps {
  name: string;
  timestamp: string;
  text: string;
}

const Post = ({ name, timestamp, text }: PostProps) => {
  const seed = Math.round(Math.random() * 100);
  return (
    <div className={"post"}>
      <div className="avatar-wrapper">
        <Image
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
          width={40}
          height={40}
          alt="avatar"
          className="avatar"
        />
      </div>
      <div className="post-content">
        <p className="post-owner">
          {name}
          <small className="timestamp">{timestamp}</small>
        </p>
        <p className="post-text">{text}</p>
      </div>
    </div>
  );
};

const PlusIcon = () => (
  <BsPlusCircleFill
    size="22"
    className="text-green-500 dark:shadow-lg mx-2 dark:text-primary"
  />
);

export default ContentContainer;
