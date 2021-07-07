import React from "react";
import { Grid, Text, Button } from "../elements";

import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { apiKey } from "../shared/firebase";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  if (is_login && is_session) {
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text margin="0px" size="24px" bold
            _onClick={() => {
              window.location.replace("/");
            }}
            is_click
            >
              Magazine
            </Text>
          </Grid>

          <Grid is_flex>
            <Button
              _onClick={() => {
                dispatch(userActions.logoutFB());
              }}
            >
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold
          _onClick={() => {
            history.push("/");
          }}
          is_click
          >
            Magazine
          </Text>
        </Grid>

        <Grid is_flex>
          <Button
            _onClick={() => {
              history.push("/login");
            }}
          >
            로그인
          </Button>
          <Button
            _onClick={() => {
              history.push("/signup");
            }}
          >
            회원가입
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
