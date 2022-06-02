import React from "react";

const TableThree = () => {
  return (
    <>
      <h2 className="table__title">Data Ruang Kelas</h2>
      <div className="table-container">
        <table>
          <tr>
            <th rowSpan={2} style={{ paddingInline: 10 }}>
              No
            </th>
            <th rowSpan={2}>Jenis Ruangan</th>
            <th rowSpan={2}>Jumlah Ruangan</th>
            <th rowSpan={2}>Jumlah Yang Kondisinya Baik</th>
            <th rowSpan={2}>Jumlah Yang Kondisinya Rusak</th>
            <th colSpan={2}>Kategori Kerusakan</th>
          </tr>
          <tr>
            <th>Berat</th>
            <th>Sedang</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Perpustakaan</td>
            <td>1</td>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ruang Komputer</td>
            <td>1</td>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Lab. IPA Fisika</td>
            <td>1</td>
            <td></td>
            <td>1</td>
            <td></td>
            <td>1</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Lab. IPA Biologi</td>
            <td>1</td>
            <td></td>
            <td>1</td>
            <td></td>
            <td>1</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Ruang TU</td>
            <td>1</td>
            <td></td>
            <td>1</td>
            <td></td>
            <td>1</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Ruang Guru</td>
            <td>1</td>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>7</td>
            <td>Ruang Kepala Sekolah</td>
            <td>1</td>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Ruang BP</td>
            <td>1</td>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>9</td>
            <td>Ruang UKS</td>
            <td>1</td>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>10</td>
            <td>Ruang Ibadah</td>
            <td>1</td>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default TableThree;
