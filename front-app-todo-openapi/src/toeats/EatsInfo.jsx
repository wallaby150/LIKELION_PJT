import { useState, useEffect } from "react";
import axios from "axios";

const BASEURL = `https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${
  import.meta.env.VITE_API_KEY
}&pageNo=1&numOfRows=10&resultType=json`;

const EatsInfo = () => {
  let [eatsList, setEatsList] = useState([]);

  const getServerData = async () => {
    try {
      const response = await axios.get(BASEURL);
      console.log(response);
      let rows = response.data["getFoodKr"]["item"];
      console.log(rows.length);
      setEatsList(rows);
    } catch (e) {
      console.log(e);
    }
  };

  let items = eatsList.map((item) => {
    let name = item["MAIN_TITLE"];
    let location = item["ADDR1"];
    let tel = item["CNTCT_TEL"];
    let menus = item["RPRSNTV_MENU"];
    let desc = item["ITEMCNTNTS"];

    return (
      <tr key={item["UC_SEQ"]} title={desc}>
        <td>{name}</td>
        <td>{menus}</td>
        <td>{location}</td>
        <td>{tel}</td>
      </tr>
    );
  });

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <>
      <h3 className="text-center">부산시 맛집 목록</h3>
      <br />
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">가게명</th>
            <th scope="col">메뉴</th>
            <th scope="col">주소</th>
            <th scope="col">전화번호</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </>
  );
};

export default EatsInfo;
