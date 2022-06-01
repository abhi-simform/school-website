import React from "react";

import { Row, Col, Input, Pagination } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import GuruCard from "./GuruCard/GuruCard";

import Guru1 from "../../../Assets/Images/Guru/guru1.jpg";
import Guru2 from "../../../Assets/Images/Guru/guru2.jpg";
import Guru3 from "../../../Assets/Images/Guru/guru3.jpg";
import Guru4 from "../../../Assets/Images/Guru/guru4.jpg";
import Guru5 from "../../../Assets/Images/Guru/guru5.jpg";
import Guru6 from "../../../Assets/Images/Guru/guru6.jpg";
import Guru7 from "../../../Assets/Images/Guru/guru7.jpg";
import Guru8 from "../../../Assets/Images/Guru/guru8.jpg";
import Guru9 from "../../../Assets/Images/Guru/guru9.jpg";

import "./Gurus.scss";

const guruData = [
  {
    key: 1,
    image: Guru1,
    name: "Hj. ELIS HERNAWATI, S.Pd.",
    nip: "196606051992032008",
    subject: "Ilmu Pengetahuan Sosial",
  },
  {
    key: 2,
    image: Guru2,
    name: "Drs. Osad",
    nip: "196203121989031014",
    subject: "Bahasa Indonesia",
  },
  {
    key: 3,
    image: Guru3,
    name: "Hj. ENUNG NURHASANAH, S.Pd.",
    nip: "196202021983022006",
    subject: "Bahasa Indonesia",
  },
  {
    key: 4,
    image: Guru4,
    name: "HANA WIJAYA, S.Pd.",
    nip: "196207091983022001",
    subject: "Matematika",
  },
  {
    key: 5,
    image: Guru5,
    name: "MAMAN, S.Pd., M.M.Pd.",
    nip: "196402161989031005	",
    subject: "Penjaskes",
  },
  {
    key: 6,
    image: Guru6,
    name: "RAKHMAT, S.Pd.,M.Si.",
    nip: "196703101986031002",
    subject: "Pendidikan Kewarganegaraan",
  },
  {
    key: 7,
    image: Guru7,
    name: "RITA NURYANTI, S.Pd.",
    nip: "197108041998022003",
    subject: "Ilmu Pengetahuan Alam",
  },
  {
    key: 8,
    image: Guru8,
    name: "IDA LAELASARI, S.Pd.",
    nip: "196811231998022001",
    subject: "Bahasa Sunda",
  },
  {
    key: 9,
    image: Guru9,
    name: "SUPRIYONO, S.Pd.",
    nip: "196511141998021001",
    subject: "Bahasa Inggris",
  },
];

const Gurus = () => {
  return (
    <section className="gurus">
      <div className="container gurus-container">
        <div className="guru-search">
          <Input
            style={{ maxWidth: 400, paddingInline: 24, paddingBlock: 12, borderRadius: 4 }}
            size="large"
            placeholder="Search"
            prefix={<SearchOutlined />}
          />
        </div>
        <hr />
        <Row className="guru-card-container">
          {guruData.map((guru) => (
            <Col span="24" md={{ span: 12 }} xl={{ span: 8 }}>
              <GuruCard key={guru.key} {...guru} />
            </Col>
          ))}
        </Row>
        <div className="guru-pagination">
          <Pagination defaultCurrent={1} total={50} style={{ marginTop: 40 }} />
        </div>
      </div>
    </section>
  );
};

export default Gurus;
