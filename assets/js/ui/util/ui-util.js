   export function insertTemplateToDOM (html) {
        if (!html) {
            throw new Error("No template found");
        }
        const app = document.querySelector(".app");
        if (!app) {
            throw new Error("Target container not found");
        }
        //create template tag
        const templateTag = document.createElement("template");
        templateTag.innerHTML = html;

        // empty target container
        app.innerHTML = ""; 
        app.append(templateTag.content.cloneNode(true));
    }