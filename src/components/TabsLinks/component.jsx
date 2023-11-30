"use client";

import classNames from "classnames";
import { Button } from "../Button/component";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./styles.module.scss";

export const TabsLinks = ({ tabsData, className }) => {
  const pathname = usePathname();

  return (
    <div className={classNames(className, styles.tabs)}>
      {tabsData.map((item) => {
          return <Link key={item.id}
            href={`/restaurants/${item.id}`}
            className={
              pathname === `/restaurants/${item.id}` ? styles.activeTab : ""
            }
          >
            <Button variant={"tabs-button"}>{item.name}</Button>
          </Link>
        })}
    </div>
  );
};
