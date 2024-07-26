import { useState, useEffect } from "react";
import axios from "axios";

const BASEURL = `https://apis.data.go.kr/6260000/BusanCrsTrnngInfoService/getCrsTrnngInfo?serviceKey=${
  import.meta.env.VITE_API_KEY
}&pageNo=1&numOfRows=10&resultType=json`;

const EduInfo = () => {
  let [eduList, setEduList] = useState([]);

  const getServerData = async () => {
    try {
      const response = await axios.get(BASEURL);
      console.log(response);
      let rows = response.data["getCrsTrnngInfo"]["body"]["items"]["item"];
      console.log(rows.length);
      setEduList(rows);
    } catch (e) {
      console.log(e);
    }
  };

  let items = eduList.map((item) => {
    let lctreNm = item["lctreNm"];
    let progrsSttusNm = item["progrsSttusNm"];
    let resveGroupNm = item["resveGroupNm"];

    return (
      <tr key={lctreNm}>
        <td>{lctreNm}</td>
        <td>{progrsSttusNm}</td>
        <td>{resveGroupNm}</td>
      </tr>
    );
  });

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <>
      <h3>부산시 교육 강좌 현황</h3>
      <br />
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">강좌명</th>
            <th scope="col">접수상태</th>
            <th scope="col">운영기관</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </>
  );
};

export default EduInfo;
