import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import url from "url";
import { useSelector, useDispatch } from "react-redux";
export default function Homepage(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  let globalState = useSelector((state) => state.Common);

  const [name, setName] = useState("dhevaraj");

  useEffect(() => {
    setName(props.data);
  }, []);
  return (
    <>
      <h2>
        Hello {`${name}`} your request is {`${props.host}`}
      </h2>

      <button
        onClick={() => {
          dispatch({
            type: "add",
          });
        }}
      >
        Increase
      </button>
      <p>{globalState.counter}</p>
      <button
        onClick={() => {
          dispatch({
            type: "sub",
          });
        }}
      >
        Decrease
      </button>
    </>
  );
}

export async function getServerSideProps(context) {
  // console.log("called");
  // const myURL = new URL();

  let getHostName = context.req.headers.host;

  return {
    props: {
      data: "Rakhesh",
      host: getHostName,
    },
  };
}
