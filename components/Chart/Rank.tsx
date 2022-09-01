import React from "react";
import { Divider, Progress } from "antd";
import { CrownOutlined } from '@ant-design/icons';
import Flex from "@/components/Flex";
import styles from "./rank.module.less";
import Card from "@/components/Card";

interface RankListProps {
  title: string;
  data: RankProps[];
}

interface RankProps {
  rank: number;
  course_name: string;
  number: number;
  rate?: number;
}

const RowItem = ({ rank, course_name, number, rate }: RankProps) => {
  return (
    <Flex justify="space-between" className={styles.rowItem}>
      <div className={styles.rank}>{rank < 4 ? <CrownOutlined /> : rank}</div>
      <div className={styles.name}>
        <div>{course_name}</div>
        {rate ? (
          <Progress
            strokeColor={{
              "0%": "#BE46D8",
              "100%": "#E88570",
            }}
            size="small"
            percent={rate * 1000}
            format={(percent) => `完播率：${(percent! / 10).toFixed(2)}%`}
          />
        ) : null}
      </div>
      <div className={styles.value}>{number}</div>
    </Flex>
  );
};

const Rank = ({ ranklists }: { ranklists: RankListProps[] }) => {
  return (
    <Card>
      <div className={styles.rankCard}>
        {ranklists.map((ranklist: RankListProps) => (
          <div className={styles.ranklist}>
            <div className={styles.title}>{ranklist.title}</div>
            <Flex justify="space-between" className={`${styles.rowItem} ${styles.td}`}>
              <div className={styles.rank}></div>
              <div className={styles.name}>课程名称</div>
              <div>学习人数</div>
            </Flex>
            <div>
              {ranklist.data.map((item: RankProps) => (
                <RowItem {...item} />
              ))}
            </div>
            <Divider />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Rank;
