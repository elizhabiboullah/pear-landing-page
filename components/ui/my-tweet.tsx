import type { Tweet } from "react-tweet/api";
import {
  type TwitterComponents,
  TweetContainer,
  TweetHeader,
  TweetInReplyTo,
  TweetBody,
  TweetMedia,
  TweetInfo,
  TweetActions,
  QuotedTweet,
  enrichTweet,
} from "react-tweet";

type Props = {
  tweet: Tweet;
  components?: TwitterComponents;
};

export const MyTweet = ({ tweet: t, components }: Props) => {
  const tweet = enrichTweet(t);
  return (
    <TweetContainer>
      <TweetHeader tweet={tweet} />

      {tweet.in_reply_to_status_id_str && <TweetInReplyTo tweet={tweet} />}

      <div className="flex flex-col md:flex-row">
        <div className="mb-4 pr-4">
          <TweetBody tweet={tweet} />
        </div>

        <div className="custom-tweet-container -mt-2">
          {tweet.mediaDetails?.length ? <TweetMedia tweet={tweet} /> : null}
        </div>
      </div>

      {tweet.quoted_tweet && <QuotedTweet tweet={tweet.quoted_tweet} />}

      <TweetInfo tweet={tweet} />
      <TweetActions tweet={tweet} />
    </TweetContainer>
  );
};