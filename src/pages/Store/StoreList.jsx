import styled from "styled-components";

const list = [
  {
    id: 1,
    name: "조류",
    category: "dessert",
    gold: 2,
    img: "/image/PNG_food_icons/alga.png",
    grow: 0.5,
    attract: 0.2,
  },
  {
    id: 2,
    name: "통조림",
    category: "dessert",
    gold: 5,
    img: "/image/PNG_food_icons/anchovies.png",
    grow: 1,
    attract: 0.5,
  },
  {
    id: 3,
    name: "사과",
    category: "dessert",
    gold: 10,
    img: "/image/PNG_food_icons/apple.png",
    grow: 2,
    attract: 1,
  },
  {
    id: 4,
    name: "바나나",
    category: "dessert",
    gold: 12,
    img: "/image/PNG_food_icons/banana.png",
    grow: 2.4,
    attract: 1.2,
  },
  {
    id: 5,
    name: "삶은 계란",
    category: "dessert",
    gold: 15,
    img: "/image/PNG_food_icons/eggs.png",
    grow: 3,
    attract: 2.5,
  },
  {
    id: 6,
    name: "아이스크림",
    category: "dessert",
    gold: 18,
    img: "/image/PNG_food_icons/ice_cream.png",
    grow: 4,
    attract: 3.4,
  },
  {
    id: 7,
    name: "젤리",
    category: "dessert",
    gold: 20,
    img: "/image/PNG_food_icons/jelly_bear.png",
    grow: 5.5,
    attract: 4.2,
  },
  {
    id: 8,
    name: "파이",
    category: "dessert",
    gold: 25,
    img: "/image/PNG_food_icons/pie.png",
    grow: 7,
    attract: 4.8,
  },
  {
    id: 9,
    name: "중절모",
    category: "accessory",
    gold: 5,
    img: "/image/Hat Pack/classicFedora.png",
    attract: 5,
  },
  {
    id: 10,
    name: "머리띠",
    category: "accessory",
    gold: 10,
    img: "/image/Hat Pack/bunny.png",
    attract: 10,
  },
  {
    id: 11,
    name: "말머리",
    category: "accessory",
    gold: 15,
    img: "/image/Hat Pack/horseHead.png",
    attract: 15,
  },
  {
    id: 12,
    name: "회전모자",
    category: "accessory",
    gold: 20,
    img: "/image/Hat Pack/pinwheel.png",
    attract: 20,
  },
  {
    id: 13,
    name: "왕관",
    category: "accessory",
    gold: 25,
    img: "/image/Hat Pack/crown.png",
    attract: 25,
  },
];

const ListDiv = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.7);
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;

  .element {
    border-bottom: 3px solid black;
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 90%;
    height: 70%;
    margin-top: 5%;
    gap: 5%;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    > div {
      width: 15%;
      height: 43%;

      &:not(:nth-child(1)):not(:nth-child(2)):not(:nth-child(3)):not(
          :nth-child(4)
        ):not(:nth-child(5)) {
        margin-top: 2%;
      }
    }
  }

  .buy {
    display: flex;
    height: 20%;
    justify-content: space-between;
    align-items: center;

    h2 {
      margin: 0;
    }

    button {
      margin-right: 5%;
      padding: 2% 4% 2% 4%;
      background-color: rgba(255, 255, 255, 0.8);
      border: 3px solid rgba(0, 0, 0, 0.7);
      border-radius: 15px;
      cursor: pointer;

      &:hover {
        background-color: rgba(217, 217, 217, 0.5);
      }

      h3 {
        margin: 0;
      }
    }

    .point {
      font-size: 32px;
      margin-left: 5%;
    }
  }
`;

const ListObject = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 3px solid black;
  border-radius: 20px;
  cursor: pointer;

  h2 {
    text-align: center;
    margin-top: 10%;
    margin-bottom: 10%;
    img {
      width: 50%;
    }
  }
  p {
    margin: 0;
    margin-bottom: 10%;
    text-align: center;
  }

  &:hover {
    background-color: rgba(217, 217, 217, 0.5);
  }

  &.select {
    background-color: rgba(217, 217, 217, 0.5);
  }
`;

const Point = styled.div`
  margin: 0;
  margin-top: 8%;
  text-align: center;
  font-weight: 800;
`;

const StoreList = ({
  Gold,
  petlist,
  myPets,
  category,
  handlePurchase,
  handleSales,
  inventory,
  select,
  handleSelect,
}) => {
  // 필터링된 동물 목록을 생성
  const filteredPetList =
    category === "pet" && petlist
      ? petlist.filter((ele) => ![...myPets].includes(ele.name)) // 가지고 있는 동물 제외
      : [];

  return (
    <ListDiv>
      <div className="element">
        {category === "pet"
          ? filteredPetList.map((ele) => (
              <div key={ele.id}>
                <ListObject
                  className={select === ele ? "select" : ""}
                  onClick={() => handleSelect(ele)}
                >
                  <h2>
                    <img
                      src={process.env.PUBLIC_URL + ele.img()}
                      alt={ele.name}
                    />
                  </h2>
                  <p>{ele.name}</p>
                </ListObject>
                <Point>{ele.gold} P</Point>
              </div>
            ))
          : category === "sales" && inventory
          ? inventory
              .filter((ele) => !"pet".includes(ele.category))
              .map((ele) => (
                <div key={ele.id}>
                  <ListObject
                    className={select === ele ? "select" : ""}
                    onClick={() => handleSelect(ele)}
                  >
                    <h2>
                      <img
                        src={process.env.PUBLIC_URL + ele.img}
                        alt={ele.name}
                      />
                    </h2>
                    <p>{ele.name}</p>
                  </ListObject>
                  <Point>{ele.gold} P</Point>
                </div>
              ))
          : list
              .filter((ele) => category === ele.category)
              .map((ele) => (
                <div key={ele.id}>
                  <ListObject
                    className={select === ele ? "select" : ""}
                    onClick={() => handleSelect(ele)}
                  >
                    <h2>
                      <img
                        src={process.env.PUBLIC_URL + ele.img}
                        alt={ele.name}
                      />
                    </h2>
                    <p>{ele.name}</p>
                  </ListObject>
                  <Point>{ele.gold} P</Point>
                </div>
              ))}
      </div>
      <div className="buy">
        <h2 className="point">POINT:{Gold}</h2>
        {category !== "sales" ? (
          <button onClick={() => handlePurchase(select)}>
            <h3>구매</h3>
          </button>
        ) : (
          <button onClick={() => handleSales(select)}>
            <h3>판매</h3>
          </button>
        )}
      </div>
    </ListDiv>
  );
};

export default StoreList;
