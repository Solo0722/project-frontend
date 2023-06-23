import { Button, Checkbox, Dropdown, Form, Input, message } from "antd";
import styled from "styled-components";
import { defaultTheme } from "../../shared/theme/theme";
import { useState } from "react";
import { MEDIA_QUERIES } from "../../shared/utils/constants";
import IonIcon from "../../shared/components/Ionicon";

const Landingpage = () => {
  const [isStudentSignin, setIsStudentSignin] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);

    if (isStudentSignin) {
      if (values.confirmPassword === values.password) {
        //something
      } else {
        message.error("Passwords do not match!");
      }
    } else {
      //something
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error(`Authentication failed!`);
  };

  const toggleAuth = () => {
    setIsStudentSignin((prev) => !prev);
  };

  const items = [
    {
      key: "1",
      label: <p>As lecturer</p>,
    },
    {
      key: "2",
      label: <p>As student</p>,
    },
  ];

  return (
    <LandingPageWrapper>
      <HeaderWrapper>
        <img src="/knust-logo.png" alt="logo" />

        <Dropdown
          style={{ backgroundColor: "red" }}
          menu={{
            items,
          }}
          placement="bottom"
        >
          <Button
            type="ghost"
            style={{
              backgroundColor: "transparent",
              boxShadow: 0,
              border: "1px solid rgba(255, 255, 255,0.1)",
              borderRadius: "20px",
              fontSize: "12px",
            }}
          >
            Sign up
          </Button>
        </Dropdown>
      </HeaderWrapper>
      <HeroWrapper>
        <img src="/main-banner-img.svg" alt="" />
        <div>
          <h3>COE Virtual Classroom</h3>
          <p>
            This web app seeks to bridge the gap between students and lecturers
            in terms of communication between them.
          </p>
        </div>
      </HeroWrapper>
      <FormWrapper>
        <Wrapper>
          <h3>Welcome back</h3>
          <Form
            form={form}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            layout="vertical"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Invalid email!",
                },
              ]}
            >
              <label className="label">Email</label>
              <Input className="input" placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Invalid password!",
                },
              ]}
            >
              <label className="label">Password</label>
              <Input.Password
                className="input"
                placeholder="Password"
                styles={{
                  input: {
                    backgroundColor: "transparent",
                    fontSize: "12px",
                  },
                }}
              />
            </Form.Item>

            <Form.Item>
              <Checkbox children={<p>Remember me</p>} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Sign in
              </Button>
            </Form.Item>
          </Form>

          <small className="sign-in-toggle-wrapper" onClick={toggleAuth}>
            {isStudentSignin ? (
              <span>
                Are you a lecturer?{" "}
                <span style={{ color: `${defaultTheme.primaryColor[400]}` }}>
                  Sign in
                </span>
              </span>
            ) : (
              <span>
                Are you a student?{" "}
                <span style={{ color: `${defaultTheme.primaryColor[400]}` }}>
                  Sign in
                </span>
              </span>
            )}
          </small>
        </Wrapper>
      </FormWrapper>
    </LandingPageWrapper>
  );
};

const LandingPageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  scroll-behavior: smooth;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      flex-direction: column;
    }
  }
`;

export const HeaderWrapper = styled.nav`
  width: 100%;
  height: 50px;
  padding: 0 2rem;
  z-index: 10;
  background-color: transparent;
  -webkit-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;

  & img {
    width: 25px;
    height: 30px;
  }
`;

const HeroWrapper = styled.div`
  width: 60%;
  height: 100vh;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.herobg};
  text-align: center;

  img {
    width: 50%;
    height: 50%;
  }

  h3 {
    font-size: 2rem;
    margin: 10px 0;
    font-family: "Lobster Two", sans-serif;
  }

  p {
    width: 60%;
    margin: auto;
    line-height: 1.3rem;
  }

  & .get-started-btn {
    display: none;
  }

  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
    }

    & img {
      width: 100%;
      height: 40%;
    }
  }
`;

const FormWrapper = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.accentColor};

  & .input {
    background-color: transparent;
    margin-top: 0.5rem;
    border-radius: 7px;
    /* font-size: 12px; */
  }

  & .input::placeholder {
    font-size: 12px;
  }

  & button {
    font-size: 12px;
    border-radius: 7px;
    box-shadow: none;
    width: 40%;
  }

  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
      height: 80vh;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

  h3 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    /* font-size: 16px; */
  }

  form {
    width: 100%;
  }

  & .sign-up-btn-wrapper p {
    color: ${defaultTheme.primaryColor[400]};
    cursor: pointer;
  }

  & .sign-in-toggle-wrapper {
    position: absolute;
    bottom: 10px;
    padding: 1rem 0;
    font-size: 11px;
    cursor: pointer;
  }

  & .label {
    font-size: 12px;
    font-weight: bold;
  }

  ${MEDIA_QUERIES.MOBILE} {
    & {
      padding: 1rem;
    }
  }
`;

export default Landingpage;
