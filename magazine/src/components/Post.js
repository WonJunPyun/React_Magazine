import React from "react";
import { Grid, Image, Text, Button } from "../elements";
import { HeartButton } from "./index";

import { history } from "../redux/configureStore";

import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Post = React.memo((props) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
            {props.is_me && (
              <React.Fragment>
                <Button
                  width="auto"
                  margin="4px"
                  padding="4px"
                  _onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    history.push(`/write/${props.id}`);
                  }}
                >
                  수정
                </Button>
                <Button
                  width="auto"
                  margin="4px"
                  padding="4px"
                  _onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();


                    dispatch(postActions.deletePostFB(props.id));
                  }}
                >
                  삭제
                </Button>
              </React.Fragment>
            )}
          </Grid>
        </Grid>

        {props.layout_type === "a" && (
          <React.Fragment>
            <Grid padding="16px">
              <Text>{props.contents}</Text>
            </Grid>
            <Grid>
              <Image shape="rectangle" src={props.image_url} />
            </Grid>
          </React.Fragment>
        )}

        {props.layout_type === "b" && (
          <React.Fragment>
            <Grid is_flex>
              <Grid width="50%" padding="16px">
                <Text>{props.contents}</Text>
              </Grid>
              <Image shape="rectangle" src={props.image_url} />
            </Grid>
          </React.Fragment>
        )}

        {props.layout_type === "c" && (
          <React.Fragment>
            <Grid is_flex>
              <Image shape="rectangle" src={props.image_url} />
              <Grid width="50%" padding="16px">
                <Text>{props.contents}</Text>
              </Grid>
            </Grid>
          </React.Fragment>
        )}

        <Grid is_flex padding="16px">
          <Text margin="0px" bold>
            좋아요 {props.like_cnt}개
          </Text>

          <HeartButton></HeartButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
});

Post.defaultProps = {
  id: null,
  user_info: {
    user_id: "onejun",
    user_name: "onejun",
    user_profile: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvpojB%2FbtqSXjVkHFI%2FNWCgx8ztHgm9hHEh8G6L8K%2Fimg.jpg",
  },
  image_url: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvpojB%2FbtqSXjVkHFI%2FNWCgx8ztHgm9hHEh8G6L8K%2Fimg.jpg",
  contents: "루피 입니다!",
  like_cnt: 10,
  layout_type: "a",
  insert_dt: "2021-02-26 10:00:00",
  is_me: false,
};

export default Post;
