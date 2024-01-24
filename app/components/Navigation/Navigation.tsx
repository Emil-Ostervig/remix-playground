import { Link } from "@remix-run/react";
import React from "react";
import { useFrame } from "~/context/FrameContext/FrameContext";

type NavigationProps = {};

export const Navigation = (props: NavigationProps) => {
  const { mainMenu = [] } = useFrame() ?? {};
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {mainMenu.map((item, index) => (
        <li key={index}>
          <Link to={item.node?.url ?? ""}>{item?.node?.title}</Link>
        </li>
      ))}
    </ul>
  );
};
