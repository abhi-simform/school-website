import React from "react";

import { Table } from "antd";

const dataSource = [
  {
    key: "1",
    number: 1,
    guru: "Guru PNS",
    negeri: "32",
    s1: "23",
    s2: "8",
    yang: "",
    keterangan: "1 Orang D-1",
  },
  {
    key: "2",
    number: 2,
    guru: "Guru Non PNS",
    negeri: "5",
    s1: "5",
    s2: "",
    yang: "",
    keterangan: "",
  },
  {
    key: "3",
    number: 3,
    guru: "Guru PNS DPK",
    negeri: "2",
    s1: "1",
    s2: "1",
    yang: "",
    keterangan: "",
  },
  {
    key: "4",
    number: 4,
    guru: "Staf TU PNS",
    negeri: "4",
    s1: "",
    s2: "",
    yang: "",
    keterangan: "",
  },
  {
    key: "5",
    number: 5,
    guru: "Staf TU Non PNS",
    negeri: "9",
    s1: "",
    s2: "",
    yang: "",
    keterangan: "",
  },
];

const columns = [
  {
    title: "No.",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Jumlah Guru / Staff",
    dataIndex: "guru",
    key: "guru",
  },
  {
    title: "Smp Negeri",
    dataIndex: "negeri",
    key: "negeri",
  },
  {
    title: "S-1",
    dataIndex: "s1",
    key: "s1",
  },
  {
    title: "S-2",
    dataIndex: "s2",
    key: "s2",
  },
  {
    title: "Yang sedang menempuh S-1",
    dataIndex: "yang",
    key: "yang",
  },
  {
    title: "Keterangan",
    dataIndex: "keterangan",
    key: "keterangan",
  },
];

const TableFour = () => {
  return (
    <>
      <h2 className="table__title">Data Ruang Kelas</h2>
      <div className="table-container">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </>
  );
};

export default TableFour;
