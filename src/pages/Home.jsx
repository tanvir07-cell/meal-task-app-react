import * as DateFns from "date-fns";

import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";

function Home() {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1 * 1000);
  }, [time]);

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    );
  }, [date]);

  return (
    <Layout>
      <h1>
        Now The Time is&nbsp;
        {DateFns.getHours(time) >= 10
          ? DateFns.getHours(time)
          : `0${DateFns.getHours(time)}`}
        :
        {DateFns.getMinutes(time) >= 10
          ? DateFns.getMinutes(time)
          : `0${DateFns.getMinutes(time)}`}
        :
        {DateFns.getSeconds(time) >= 10
          ? DateFns.getSeconds(time)
          : `0${DateFns.getSeconds(time)}`}
      </h1>

      <h2>Today is {String(date)}</h2>
    </Layout>
  );
}

export default Home;
