import React from "react";

const TableTwo = () => {
  return (
    <>
      <h2 className="table__title">Data Ruang Kelas</h2>
      <div className="table-container">
        <table>
          <tr>
            <th colSpan={5} style={{ width: "60%" }}>
              Jumlah Ruang Kelas Asli
            </th>
            <th>Jumlah ruang lainnya yang dipakai untuk ruang kelas (e)</th>
            <th>Jumlah ruang yang digunakan untuk ruang kelas (f)=(d+e) </th>
          </tr>
          <tr>
            <td></td>
            <td>Ukuran 7x9 m2</td>
            <td>Ukuran &gt; 63 m2</td>
            <td>Ukuran &gt; &lt; 63 m2</td>
            <td> Jumlah (d) (d) = (1 + b + c)</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Jumlah</td>
            <td>4</td>
            <td>23</td>
            <td>-</td>
            <td>27</td>
            <td>-</td>
            <td>27</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default TableTwo;
