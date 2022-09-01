import React from "react";
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

const RowItem = ({ course_name, number, rate }: RankProps) => {
  return (
    <div>
      {course_name} {number} {rate}
    </div>
  );
};

const Rank = ({ ranklists }: { ranklists: RankListProps[] }) => {
  return (
    <Card>
      <div className={styles.rankCard}>
        {ranklists.map((ranklist: RankListProps) => (
          <div>
            <div>{ranklist.title}</div>
            <div>
              {ranklist.data.map((item: RankProps) => (
                <RowItem {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Rank;
