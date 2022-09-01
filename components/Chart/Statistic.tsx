import React from "react";
import styles from "./statistic.module.less";
import Card from "@/components/Card";
import Flex from '@/components/Flex';

interface StatisticsProps {
  name: string;
  value: string;
  icon?: string;
}

const Statistics = ({ name, value, icon }: StatisticsProps) => {
  return (
    <Card>
      <Flex justify="space-between" className={styles.card}>
        <div>
            <div className={styles.name}>{name}</div>
            <div className={styles.value}>{value}</div>
        </div>
        {icon ? <img src={icon} alt="" className={styles.icon} /> : null}
      </Flex>
    </Card>
  );
};

export default Statistics;
