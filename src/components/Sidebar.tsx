import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/../public/payrollpal.png";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div>
      <Sheet>
        <SheetTrigger className={styles.logo}>
          <Image src={Logo} alt="logo" width={100}></Image>
        </SheetTrigger>
        <SheetContent className={styles.sheetContainer}>
          <SheetHeader>
            <SheetTitle>PayRollPal</SheetTitle>
            <Button variant={"outline"} className={styles.link}>
              <Link className={styles.links} href={"/employees"}>
                Employees
              </Link>
            </Button>
            <Button variant={"outline"} className={styles.link}>
              <Link className={styles.links} href={"/departments"}>
                Departments
              </Link>
            </Button>
            <Button variant={"outline"} className={styles.link}>
              <Link className={styles.links} href={"/paychecks"}>
                Paychecks
              </Link>
            </Button>
            <Button variant={"outline"} className={styles.link}>
              <Link className={styles.links} href={"/audit-logs"}>
                Audit Logs
              </Link>
            </Button>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Sidebar;
