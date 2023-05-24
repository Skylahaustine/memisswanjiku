import React, { useState, useEffect } from "react";
import { Col, Progress, Row } from "antd";
import background from "./Components/Timer/Assets/Images/uss.jpg";

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const targetDate = new Date("2023-06-18T23:59:59");
      const diff = targetDate - currentDate;

      if (diff <= 0) {
        clearInterval(intervalId);
        setTimeRemaining({
          years: 0,
          months: 0,
          weeks: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      );
      const weeks = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7)
      );
      const days = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeRemaining({
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const style = {
    width: "100vw",
    height: "100vh",
    textAlign: "center",
    backgroundImage: `url(${background})`,

    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={style}>
      <h1>Haiya😂😂👀</h1>
      Kuumbe siku hukimbia.
      <Row justify={"center"} gutter={12}>
        {timeRemaining.years > 0 && (
          <Col lg={4} md={6} sm={12}>
            <div style={{ margin: "16px 0" }}>
              <Progress
                type="circle"
                percent={Math.round((timeRemaining.years * 100) / 12)}
                format={() => `${timeRemaining.years} Years`}
              />
            </div>
          </Col>
        )}
        {timeRemaining.months > 0 && (
          <Col lg={4} md={6} sm={12}>
            <div style={{ margin: "16px 0" }}>
              <Progress
                type="circle"
                percent={timeRemaining.months}
                format={() => `${timeRemaining.months} Months`}
                strokeColor={"#1b6535"}
              />
            </div>
          </Col>
        )}
        {timeRemaining.weeks > 0 && (
          <Col lg={4} md={6} sm={12}>
            <div style={{ margin: "16px 0" }}>
              <Progress
                type="circle"
                percent={Math.round((timeRemaining.weeks * 100) / 4)}
                format={() => `${timeRemaining.weeks} Weeks`}
                strokeColor={"#77c593"}
              />
            </div>
          </Col>
        )}
        {timeRemaining.days > 0 && (
          <Col lg={4} md={6} sm={12}>
            <div style={{ margin: "16px 0" }}>
              <Progress
                type="circle"
                percent={Math.round((timeRemaining.days * 100) / 31)}
                format={() => `${timeRemaining.days} Days`}
                strokeColor={"#3a6b35"}
              />
            </div>
          </Col>
        )}
        {timeRemaining.hours > 0 && (
          <Col lg={4} md={6} sm={12}>
            <div style={{ margin: "16px 0" }}>
              <Progress
                type="circle"
                percent={Math.round((timeRemaining.hours * 100) / 24)}
                format={() => `${timeRemaining.hours} Hours`}
                strokeColor={"pink"}
              />
            </div>
          </Col>
        )}
        {timeRemaining.minutes > 0 && (
          <Col lg={4} md={6} sm={12}>
            <div style={{ margin: "16px 0" }}>
              <Progress
                type="circle"
                percent={Math.round((timeRemaining.minutes * 100) / 60)}
                format={() => `${timeRemaining.minutes} Min`}
                strokeColor={"purple"}
              />
            </div>
          </Col>
        )}
        <Col lg={4} md={6} sm={12}>
          {" "}
          <div style={{ margin: "16px 0" }}>
            <Progress
              type="circle"
              percent={Math.round((timeRemaining.seconds * 100) / 60)}
              format={() => `${timeRemaining.seconds} Sec`}
              //   strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
              strokeColor={{ "0%": "#2eb82e", "100%": "green" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Timer;
