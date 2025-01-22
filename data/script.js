 
document.addEventListener("DOMContentLoaded", () => {
  fetch("GitWorkflow.json")
    .then((response) => response.json())
    .then((data) => renderCards(data.categories));
});

function renderCards(categories) {
  const cardContainer = document.getElementById("card-container");
  categories.forEach((category) => {
    category.topics.forEach((topic) => {
      topic.content.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";

        // Add title
        const title = document.createElement("h2");
        title.textContent = item.title;
        card.appendChild(title);

        // Add description
        const description = document.createElement("p");
        description.textContent = item.description;
        card.appendChild(description);

        // Add code examples
        item.codeExamples.forEach((example) => {
          const codeBlock = document.createElement("div");
          codeBlock.className = "code-block";
          codeBlock.innerHTML = `<strong>${example.description}:</strong><br><code>${example.code}</code>`;
          card.appendChild(codeBlock);
        });

        // Add tips
        const tipsDiv = document.createElement("div");
        tipsDiv.className = "tips";
        tipsDiv.innerHTML = `<strong>Tips:</strong><ul>${item.tips
          .map((tip) => `<li>${tip}</li>`)
          .join("")}</ul>`;
        card.appendChild(tipsDiv);

        cardContainer.appendChild(card);
      });
    });
  });
}
