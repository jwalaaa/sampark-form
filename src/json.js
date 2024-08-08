export const json = {
  "title": "Sampark new form requirement",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "dropdown",
          "name": "question1",
          "title": "Branch\r\n",
          "choices": [
            "Item 1",
            "Item 2",
            "Item 3"
          ]
        },
        {
          "type": "dropdown",
          "name": "question2",
          "title": "Customer LAN ID\r\n",
          "choices": [
            "Item 1",
            "Item 2",
            "Item 3"
          ]
        },
        {
          "type": "dropdown",
          "name": "question3",
          "title": "Disposition\r\n",
          "choices": [
            "Item 1",
            "Item 2",
            "Item 3"
          ]
        },
        {
          "type": "text",
          "name": "question4",
          "title": "Remarks\r\n"
        },
        {
          "type": "file",
          "name": "question5",
          "title": "Image"
        },
        {
          "type": "html",
          "name": "question6",
          "minWidth": "100px",
          "html": `
            <h3>Find your Current location</h3>
            <button onclick="getlocation()">Click me</button>
            <div id="location"></div>
          `
        }
      ]
    }
  ]
}
