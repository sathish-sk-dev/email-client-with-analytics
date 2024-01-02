import { IReceipient } from "../../../../interfaces/IReceipient";
import { constructSuggestionsFromReceipients } from "../composeMailUtils";
import { IAutoCompleteSuggestion } from "../../../../components/auto-complete-tag/interfaces/IAutoCompleteSuggestion";

describe("constructSuggestionsFromReceipients", () => {
  const receipients: IReceipient[] = [
    {
      id: "2b500c8e-a5da-40d3-a5a6-78b23c0a58d1",
      name: "Sage_Kub28",
      mailId: "Ben_Emard48@yahoo.com",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/826.jpg",
    },
    {
      id: "6f016e13-bbff-4269-b728-a69bd5a1b80d",
      name: "Halle67",
      mailId: "Leonora.Feil@hotmail.com",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/758.jpg",
    },
    {
      id: "31571be7-359c-4904-9e93-a7a28a0b893a",
      name: "Cara_Dare",
      mailId: "Charity_Kemmer@yahoo.com",
      avatar: "https://avatars.githubusercontent.com/u/59535723",
    },
  ];

  it("should construct autocomplete suggestions from receipients", () => {
    const suggestions = constructSuggestionsFromReceipients(receipients);

    const expectedSuggestions: IAutoCompleteSuggestion[] = [
      {
        value: "2b500c8e-a5da-40d3-a5a6-78b23c0a58d1",
        label: "Sage_Kub28",
        id: "2b500c8e-a5da-40d3-a5a6-78b23c0a58d1",
        name: "Sage_Kub28",
        mailId: "Ben_Emard48@yahoo.com",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/826.jpg",
      },
      {
        value: "6f016e13-bbff-4269-b728-a69bd5a1b80d",
        label: "Halle67",
        id: "6f016e13-bbff-4269-b728-a69bd5a1b80d",
        name: "Halle67",
        mailId: "Leonora.Feil@hotmail.com",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/758.jpg",
      },
      {
        value: "31571be7-359c-4904-9e93-a7a28a0b893a",
        label: "Cara_Dare",
        id: "31571be7-359c-4904-9e93-a7a28a0b893a",
        name: "Cara_Dare",
        mailId: "Charity_Kemmer@yahoo.com",
        avatar: "https://avatars.githubusercontent.com/u/59535723",
      },
    ];

    expect(suggestions).toEqual(expectedSuggestions);
  });
});
