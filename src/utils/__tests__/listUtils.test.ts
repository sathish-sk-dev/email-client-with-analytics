import { searchList } from "../listUtils";

const mockMailList = [
  {
    id: "e1643273-ad6c-4592-84ba-448ec62e4f3a",
    subject: "ubi beneficium vinculum",
    body: "Virga talio angustus umbra video dolores compono.",
    from: {
      id: "7ac908ac-c0f3-444c-bf64-7c50978115cb",
      name: "Ashlynn23",
      mailId: "Yoshiko_Kassulke92@yahoo.com",
    },
  },
  {
    id: "1ee26353-128d-4261-9aed-78cee995a876",
    subject: "ulterius odio subiungo",
    body: "Toties beneficium claro eaque vespillo inflammatio. Virga talio angustus umbra video dolores compono. Quas varius tenus aequus ",
    from: {
      id: "211586d0-d2a3-41db-9163-028c7a592bd7",
      name: "Francesca_Rempel79",
      mailId: "Darian27@hotmail.com",
    },
  },
  {
    id: "1e303d23-5af0-4728-9320-98ebb0e3fe57",
    subject: "calcar veritas conicio",
    body: "Vere studio non viscus atrocitas. Adficio curo aperiam solitudo corrigo sopor vitiosus tantum. Ver demens excepturi aptus.",
    from: {
      id: "91f29e4d-03b2-47de-af13-202b0f9c4347",
      name: "Odell.Mosciski57",
      mailId: "Selina.Runolfsdottir@hotmail.com",
    },
  },
];

describe("searchList", () => {
  it("should filter the list based on the nested key", () => {
    const filteredData = searchList(mockMailList, ["from.mailId"], "yahoo");
    expect(filteredData).toEqual([
      {
        id: "e1643273-ad6c-4592-84ba-448ec62e4f3a",
        subject: "ubi beneficium vinculum",
        body: "Virga talio angustus umbra video dolores compono.",
        from: {
          id: "7ac908ac-c0f3-444c-bf64-7c50978115cb",
          name: "Ashlynn23",
          mailId: "Yoshiko_Kassulke92@yahoo.com",
        },
      },
    ]);
  });

  it("should filter the list based on the non-nested key", () => {
    const filteredData = searchList(mockMailList, ["subject"], "beneficium");
    expect(filteredData).toEqual([
      {
        id: "e1643273-ad6c-4592-84ba-448ec62e4f3a",
        subject: "ubi beneficium vinculum",
        body: "Virga talio angustus umbra video dolores compono.",
        from: {
          id: "7ac908ac-c0f3-444c-bf64-7c50978115cb",
          name: "Ashlynn23",
          mailId: "Yoshiko_Kassulke92@yahoo.com",
        },
      },
    ]);
  });

  it("should filter the list based on the multiple key", () => {
    const filteredData = searchList(
      mockMailList,
      ["subject", "from.name", "body"],
      "beneficium",
    );
    expect(filteredData).toEqual([
      {
        id: "e1643273-ad6c-4592-84ba-448ec62e4f3a",
        subject: "ubi beneficium vinculum",
        body: "Virga talio angustus umbra video dolores compono.",
        from: {
          id: "7ac908ac-c0f3-444c-bf64-7c50978115cb",
          name: "Ashlynn23",
          mailId: "Yoshiko_Kassulke92@yahoo.com",
        },
      },
      {
        id: "1ee26353-128d-4261-9aed-78cee995a876",
        subject: "ulterius odio subiungo",
        body: "Toties beneficium claro eaque vespillo inflammatio. Virga talio angustus umbra video dolores compono. Quas varius tenus aequus ",
        from: {
          id: "211586d0-d2a3-41db-9163-028c7a592bd7",
          name: "Francesca_Rempel79",
          mailId: "Darian27@hotmail.com",
        },
      },
    ]);
  });

  it("should filter the list based on the case-sensitive value", () => {
    const filteredData = searchList(mockMailList, ["subject"], "BeneFicium");
    expect(filteredData).toEqual([
      {
        id: "e1643273-ad6c-4592-84ba-448ec62e4f3a",
        subject: "ubi beneficium vinculum",
        body: "Virga talio angustus umbra video dolores compono.",
        from: {
          id: "7ac908ac-c0f3-444c-bf64-7c50978115cb",
          name: "Ashlynn23",
          mailId: "Yoshiko_Kassulke92@yahoo.com",
        },
      },
    ]);
  });

  it("should return empty list when search value not available in the list", () => {
    const filteredData = searchList(mockMailList, ["subject"], "test");
    expect(filteredData).toEqual([]);
  });
});
