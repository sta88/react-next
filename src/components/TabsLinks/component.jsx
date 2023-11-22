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
      {tabsData.map(({ id, name }) => (
        <Link
          key={id}
          href={`/restaurants/${id}`}
          className={
            pathname === `/restaurants/${id}` ? styles.activeTab : ""
          }
        >
          <Button variant={"tabs-button"}>{name}</Button>
        </Link>
      ))}
    </div>
  );
};
