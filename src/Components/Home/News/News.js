import React from "react";

import { Row, Col, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import NewsCard from "./NewsCard/NewsCard";
import AgendaCard from "./AgendaCard/AgendaCard";

import News1 from "../../../Assets/Images/News/news1.jpg";
import News2 from "../../../Assets/Images/News/news2.jpg";
import News3 from "../../../Assets/Images/News/news3.jpg";
import News4 from "../../../Assets/Images/News/news4.jpg";

import Agenda1 from "../../../Assets/Images/Agenda/agenda1.jpg";
import Agenda2 from "../../../Assets/Images/Agenda/agenda1.jpg";
import Agenda3 from "../../../Assets/Images/Agenda/agenda3.jpg";

import "./News.scss";

const newsData = [
  {
    key: "1",
    image: News1,
    title: "Belajar di Rumah",
    description: "Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.",
    date: "20 Juni",
  },
  {
    key: "2",
    image: News2,
    title: "Kegiatan Belajar mengajar di Rumah",
    description: "Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.",
    date: "20 Juni",
  },
  {
    key: "3",
    image: News3,
    title: "Kegiatan Belajar mengajar di Rumah",
    description: "Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.",
    date: "20 Juni",
  },
  {
    key: "4",
    image: News4,
    title: "Kegiatan Pembelajaran Daring",
    description: "Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.",
    date: "20 Juni",
  },
];

const agendaData = [
  {
    key: "1",
    image: Agenda1,
    title: "Deklarasi Sekolah Ramah Anak",
    date: "01 - 06 - 2021",
  },
  {
    key: "2",
    image: Agenda2,
    title: "Pembagian Ijazah",
    date: "01 - 06 - 2021",
  },
  {
    key: "3",
    image: Agenda3,
    title: "Pemberitahuan PPDB 2020/2021",
    date: "01 - 06 - 2021",
  },
];

const News = () => {
  return (
    <section className="news-agenda">
      <div className="container news-agenda-container">
        <div className="news-agenda__header">
          <h2>Berita dan Agenda</h2>
          <Input
            style={{ maxWidth: 400, paddingInline: 24, paddingBlock: 12, borderRadius: 4 }}
            size="large"
            placeholder="Search"
            prefix={<SearchOutlined />}
          />
        </div>
        <Row className="cards-container">
          <Col className="news-container" span="24" lg={{ span: 14 }}>
            {newsData.map((news) => (
              <NewsCard key={news.key} image={news.image} title={news.title} description={news.description} date={news.date} />
            ))}
          </Col>
          <Col className="agenda-container" span="24" lg={{ span: 10 }}>
            {agendaData.map((agenda) => (
              <AgendaCard key={agenda.key} image={agenda.image} title={agenda.title} date={agenda.date} />
            ))}
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default News;
